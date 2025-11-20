import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export function activate(context: vscode.ExtensionContext) {
    console.log('Terraform Report Generator is now active!');

    // Register command for auto-mode (intelligent detection)
    let generateCommand = vscode.commands.registerCommand('terraform-report.generate', async (uri?: vscode.Uri) => {
        await generateReport(uri, 'auto', context);
    });

    // Register command for basic mode (no AI)
    let generateBasicCommand = vscode.commands.registerCommand('terraform-report.generateBasic', async (uri?: vscode.Uri) => {
        await generateReport(uri, 'basic', context);
    });

    // Register command for AI-enhanced mode
    let generateAICommand = vscode.commands.registerCommand('terraform-report.generateAI', async (uri?: vscode.Uri) => {
        await generateReport(uri, 'ai', context);
    });

    context.subscriptions.push(generateCommand, generateBasicCommand, generateAICommand);
}

async function generateReport(uri: vscode.Uri | undefined, mode: 'auto' | 'basic' | 'ai', context: vscode.ExtensionContext) {
    try {
        // Get the file path
        let filePath: string;
        if (uri) {
            filePath = uri.fsPath;
        } else if (vscode.window.activeTextEditor) {
            filePath = vscode.window.activeTextEditor.document.uri.fsPath;
        } else {
            vscode.window.showErrorMessage('No Terraform plan file selected or open');
            return;
        }

        // Validate file exists
        if (!fs.existsSync(filePath)) {
            vscode.window.showErrorMessage(`File not found: ${filePath}`);
            return;
        }

        // Get configuration
        const config = vscode.workspace.getConfiguration('terraformReport');
        const actualMode = mode === 'auto' ? await detectMode(filePath, config) : mode;

        // Show progress
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Generating ${actualMode === 'basic' ? 'Basic' : 'AI-Enhanced'} Terraform Report`,
            cancellable: false
        }, async (progress) => {
            progress.report({ increment: 0, message: 'Parsing Terraform plan...' });

            // Get workspace folder
            const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
            if (!workspaceFolder) {
                throw new Error('No workspace folder found');
            }

            const scriptsPath = path.join(workspaceFolder.uri.fsPath, 'scripts');
            
            // Check if scripts exist
            if (!fs.existsSync(scriptsPath)) {
                throw new Error('Scripts folder not found. Please ensure the extension is properly installed.');
            }

            progress.report({ increment: 30, message: 'Running report generator...' });

            // Execute PowerShell script
            const scriptPath = path.join(scriptsPath, 'generate_basic_report.ps1');
            const command = `pwsh.exe -ExecutionPolicy Bypass -File "${scriptPath}" -PlanFile "${filePath}"`;

            try {
                const { stdout, stderr } = await execAsync(command, {
                    cwd: scriptsPath
                });

                if (stderr && !stderr.includes('warning')) {
                    console.error('Script error:', stderr);
                }

                progress.report({ increment: 60, message: 'Report generated successfully!' });

                // Find the generated report
                const reportMd = path.join(workspaceFolder.uri.fsPath, 'Terraform_Plan_Basic_Report.md');
                const reportPdf = path.join(workspaceFolder.uri.fsPath, 'Terraform_Plan_Basic_Report.pdf');

                // Show success message with actions
                const openMd = 'Open Markdown';
                const openPdf = 'Open PDF';
                const openFolder = 'Open Folder';

                const selection = await vscode.window.showInformationMessage(
                    `✅ Report generated successfully! (${actualMode === 'basic' ? 'Basic Mode' : 'AI-Enhanced Mode'})`,
                    openMd,
                    openPdf,
                    openFolder
                );

                // Handle user selection
                if (selection === openMd && fs.existsSync(reportMd)) {
                    const doc = await vscode.workspace.openTextDocument(reportMd);
                    await vscode.window.showTextDocument(doc, { preview: false });
                } else if (selection === openPdf && fs.existsSync(reportPdf)) {
                    await vscode.env.openExternal(vscode.Uri.file(reportPdf));
                } else if (selection === openFolder) {
                    await vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(workspaceFolder.uri.fsPath));
                }

            } catch (error: any) {
                throw new Error(`Failed to generate report: ${error.message}`);
            }
        });

    } catch (error: any) {
        vscode.window.showErrorMessage(`Error generating report: ${error.message}`);
        console.error('Report generation error:', error);
    }
}

async function detectMode(filePath: string, config: vscode.WorkspaceConfiguration): Promise<'basic' | 'ai'> {
    // Read configured mode
    const configMode = config.get<string>('mode', 'auto');
    
    if (configMode === 'basic') {
        return 'basic';
    }
    
    if (configMode === 'ai') {
        return 'ai';
    }

    // Auto-detect based on plan complexity
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Extract plan summary
        const planMatch = content.match(/Plan: (\d+) to add, (\d+) to change, (\d+) to destroy/);
        
        if (planMatch) {
            const toAdd = parseInt(planMatch[1]);
            const toChange = parseInt(planMatch[2]);
            const toDestroy = parseInt(planMatch[3]);
            const total = toAdd + toChange + toDestroy;

            // Get thresholds from config
            const thresholds = config.get<any>('autoDetectThreshold', {
                destroyCount: 1,
                changeCount: 10,
                totalChanges: 15
            });

            // Use AI if:
            // - Any resources will be destroyed
            // - More than threshold changes
            // - Total changes exceed threshold
            if (toDestroy >= thresholds.destroyCount ||
                toChange >= thresholds.changeCount ||
                total >= thresholds.totalChanges) {
                return 'ai';
            }
        }

        // Default to basic for simple plans
        return 'basic';

    } catch (error) {
        console.error('Error detecting mode:', error);
        return 'basic'; // Fallback to basic on error
    }
}

export function deactivate() {
    console.log('Terraform Report Generator deactivated');
}
