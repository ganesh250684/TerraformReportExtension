# Complete Basic Report Generator
# Parse Terraform plan and generate PDF without AI

param(
    [string]$PlanFile = "planQC20NovGN-output.txt"
)

Write-Host ""
Write-Host "╔════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  Terraform Basic Report Generator (No AI) ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check if plan file exists
if (-not (Test-Path $PlanFile)) {
    Write-Host "ERROR: Plan file not found: $PlanFile" -ForegroundColor Red
    exit 1
}

Write-Host "Plan File: $PlanFile" -ForegroundColor Yellow
Write-Host ""

# Step 1: Parse the plan
Write-Host "[1/2] Parsing Terraform plan..." -ForegroundColor Green
& .\parse_terraform_basic.ps1 -PlanFile $PlanFile

if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne $null) {
    Write-Host "ERROR: Parsing failed" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 2: Generate PDF
Write-Host "[2/2] Generating PDF..." -ForegroundColor Green
& .\create_basic_pdf.ps1

if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne $null) {
    Write-Host "ERROR: PDF generation failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✓ Complete! Basic report generated without AI." -ForegroundColor Green
Write-Host ""
Write-Host "Comparison:" -ForegroundColor Cyan
Write-Host "  [✓] Fast - no API calls" -ForegroundColor Green
Write-Host "  [✓] Free - no AI costs" -ForegroundColor Green
Write-Host "  [✓] Private - no data sent externally" -ForegroundColor Green
Write-Host "  [✗] No impact analysis" -ForegroundColor Yellow
Write-Host "  [✗] No risk assessment" -ForegroundColor Yellow
Write-Host "  [✗] No recommendations" -ForegroundColor Yellow
Write-Host ""
