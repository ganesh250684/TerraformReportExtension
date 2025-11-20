# 🚀 Terraform Report Generator for VS Code

> **Stop squinting at Terraform plan output!** Transform cryptic terminal text into beautiful, professional PDF reports in seconds.

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue)](https://marketplace.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/github/stars/ganesh250684/TerraformReportExtension?style=social)](https://github.com/ganesh250684/TerraformReportExtension)

## 😫 The Problem Every Terraform User Faces

**You're about to apply a critical infrastructure change...**

- ❌ Staring at **500+ lines of terminal output**
- ❌ **Scrolling endlessly** to find that one resource change
- ❌ Your manager asks: *"What exactly is changing?"* and you scramble to copy-paste text
- ❌ **No clear way** to review, share, or archive what's about to happen
- ❌ **Can't easily spot** dangerous destroys buried in the noise
- ❌ Wasting **30+ minutes** manually documenting changes for approval

**Sound familiar?** You're not alone. Every DevOps engineer has been there.

## ✨ The Solution: One-Click Beautiful Reports

This VS Code extension transforms your Terraform plan chaos into crystal-clear, professional PDF reports that:

- ✅ **Highlight critical changes** with color-coded actions (create ➕, modify 🔄, destroy ❌)
- ✅ **Organize everything** in clean tables and sections
- ✅ **Export instantly** to PDF for sharing with stakeholders
- ✅ **Work 100% offline** - no external dependencies, no API calls
- ✅ **Save you hours** of manual documentation every week

## 🎯 Why You NEED This Extension

### For DevOps Engineers
- 📋 **Stop manually documenting** - Generate change reports in 2 seconds
- 👀 **Spot dangerous changes instantly** - Destroys are highlighted
- 🚀 **Speed up reviews** - Clear, scannable format vs terminal soup
- 📊 **Track history** - Archive reports for compliance and audits

### For Team Leads
- 👥 **Approve changes confidently** - See exactly what's changing without Terraform expertise
- 📈 **Improve team productivity** - Eliminate back-and-forth questions
- 🔒 **Reduce risk** - Better visibility = fewer production incidents

### For Organizations
- 📝 **Meet compliance requirements** - Documented change records for every deployment
- 💰 **Save money** - Reduce time spent on change reviews by 80%
- 🎓 **Onboard faster** - New team members understand changes easily

## 🚀 Quick Start (30 seconds!)

1. **Install** this extension from VS Code Marketplace
2. **Generate** a Terraform plan: `terraform plan -out=plan.tfplan && terraform show -no-color plan.tfplan > plan.txt`
3. **Open** `plan.txt` in VS Code
4. **Right-click** → Select `Terraform: Generate Plan Report`
5. **Done!** Your beautiful PDF report is ready 🎉

## 📸 What You Get

### Before: Terminal Chaos
```
Terraform will perform the following actions:

  # aws_instance.web will be created
  + resource "aws_instance" "web" {
      + ami                          = "ami-0c55b159cbfafe1f0"
      + arn                          = (known after apply)
      + associate_public_ip_address  = (known after apply)
      ...
      [200+ more lines of hard-to-read text]
```

### After: Professional Report
```
📊 TERRAFORM PLAN REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 SUMMARY
┌─────────────────────┬───────┐
│ Resources to Add    │   5   │
│ Resources to Change │   2   │
│ Resources to Destroy│   0   │
└─────────────────────┴───────┘

� CRITICAL ACTIONS
None - Safe to proceed ✓

➕ RESOURCES TO CREATE
1. aws_instance.web
   Type: EC2 Instance
   Changes: Initial creation...
```

## 🛠️ Installation

### Option 1: From VS Code Marketplace (Recommended)
1. Open **VS Code**
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
3. Search for **"Terraform Report Generator"**
4. Click **Install**
5. Reload VS Code

### Option 2: From VSIX File
```powershell
code --install-extension terraform-report-generator-1.0.0.vsix
```

### Option 3: Manual Installation
1. Download `.vsix` file from [GitHub Releases](https://github.com/ganesh250684/TerraformReportExtension/releases)
2. In VS Code: `Extensions` → `...` menu → `Install from VSIX`
3. Select downloaded file

## 🎬 How to Use

### Method 1: Context Menu (Easiest)
1. Generate your Terraform plan file:
   ```bash
   terraform plan -out=plan.tfplan
   terraform show -no-color plan.tfplan > plan.txt
   ```
2. **Right-click** on `plan.txt` in VS Code
3. Select **"Terraform: Generate Plan Report"**
4. Report opens automatically! ✨

### Method 2: Command Palette
1. Open your plan file in VS Code
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type **"Terraform: Generate Plan Report"**
4. Press Enter

### Method 3: Keyboard Shortcut
1. Open plan file
2. Press `Ctrl+Alt+T` (Windows/Linux) or `Cmd+Alt+T` (Mac)
3. Instant report!

## 📚 Available Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| `Terraform: Generate Plan Report` | Auto-detect best mode | **Default choice** - Let the extension decide |
| `Terraform: Generate Basic Report` | Fast, offline mode | Quick reviews, no AI needed |
| `Terraform: Generate AI Report` | Enhanced analysis | Complex changes, need insights |

## 🎨 Report Features

### Basic Mode (Lightning Fast ⚡)
```
Terraform Plan → Parser → Markdown → PDF
                 ↓
            - Extract changes
            - List resources  
            - Show attributes
            - Color-coded actions
            
Result: Clean report in 2 seconds
```

✅ **Perfect for:**
- Daily routine changes
- Simple infrastructure updates
- Quick peer reviews
- CI/CD pipeline documentation

### AI-Enhanced Mode (Coming Soon 🚀)
```
Terraform Plan → Parser → AI Analysis → Rich Report → PDF
                          ↓
                    - Impact assessment
                    - Risk classification
                    - Testing recommendations
                    - Rollback procedures
                    
Result: Comprehensive analysis in 30 seconds
```

✅ **Perfect for:**
- Production deployments
- Complex multi-resource changes
- Security-critical updates
- Stakeholder presentations

## ⚙️ Configuration

Customize the extension to fit your workflow:

```jsonc
{
  // Report generation mode
  "terraformReport.mode": "auto",  // "auto" | "basic" | "ai"
  
  // Default export format
  "terraformReport.defaultExport": "pdf",  // "pdf" | "markdown" | "both"
  
  // Auto-open report after generation
  "terraformReport.openAfterGenerate": true,
  
  // Report template style
  "terraformReport.templateStyle": "professional"  // "professional" | "minimal" | "detailed"
}
```

### Configuration Options Explained

| Setting | Values | Description |
|---------|--------|-------------|
| `mode` | `auto`, `basic`, `ai` | How to generate reports (auto detects complexity) |
| `defaultExport` | `pdf`, `markdown`, `both` | Output format preference |
| `openAfterGenerate` | `true`, `false` | Automatically open report when done |
| `templateStyle` | `professional`, `minimal`, `detailed` | Report styling |

### Access Settings
1. `File` → `Preferences` → `Settings` (or `Ctrl+,`)
2. Search for **"Terraform Report"**
3. Adjust settings to your preference

## 💰 Pricing

### 🎉 100% FREE Forever!
- ✅ **Unlimited basic reports**
- ✅ PDF and Markdown export
- ✅ All core features
- ✅ No credit card required
- ✅ No usage limits
- ✅ Open source (MIT License)

**No hidden costs. No subscriptions. Completely free.**

### 🚀 Future AI Features (Optional - Coming Soon)
When we release AI-enhanced analysis:
- 🆓 **10 AI reports per month** (free tier)
- 💎 **Unlimited AI reports** with your own OpenAI API key
- 🏢 **Enterprise options** for custom integrations

**Current version is 100% free with no limitations!**

## 🎯 Real-World Use Cases

### 1️⃣ Pre-Deployment Review
```bash
# Generate plan and report before applying
terraform plan -out=plan.tfplan
terraform show -no-color plan.tfplan > plan.txt
# Generate report in VS Code
# Review → Approve → Apply
terraform apply plan.tfplan
```

### 2️⃣ Change Request Documentation
- Generate report from your plan
- Attach PDF to Jira/ServiceNow ticket
- Stakeholders review without Terraform knowledge
- Track approved changes for compliance

### 3️⃣ Team Code Reviews
- Include report in pull request
- Reviewers see infrastructure impact immediately
- Faster approvals, fewer questions
- Better collaboration

### 4️⃣ Production Safety Check
- Quickly scan for `destroy` operations
- Verify resource counts match expectations
- Archive report for post-deployment audit
- Sleep better at night! 😴

## �️ Roadmap - What's Coming Next

### Version 1.1 (Next Month)
- 🤖 **AI-Powered Analysis** - Intelligent impact assessment and recommendations
- 📊 **Enhanced PDF Styling** - More templates and customization
- 🔍 **Plan Comparison** - Compare two plans side-by-side
- 📈 **Drift Detection** - Highlight unexpected changes

### Version 1.2 (Q1 2026)
- 📋 **Change History** - Track and archive all your deployments
- 🎨 **Custom Templates** - Create your own report layouts
- 🔗 **CI/CD Integration** - GitHub Actions, GitLab CI, Azure DevOps
- 📊 **Dashboard View** - Web-based report viewer

### Version 2.0 (Q2 2026)
- 🧠 **Advanced AI Features** - Risk scoring, dependency analysis
- 👥 **Team Collaboration** - Share and comment on reports
- 📱 **Mobile App** - Review plans on the go
- 🔒 **Enterprise Security** - SSO, RBAC, audit logs

**Want a feature?** [Request it here!](https://github.com/ganesh250684/TerraformReportExtension/issues)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

- 🐛 **Report bugs** - Found an issue? Let us know!
- 💡 **Suggest features** - Have an idea? We want to hear it!
- 📝 **Improve docs** - Help make our documentation better
- 💻 **Submit PRs** - Code contributions are always welcome

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 🐛 Troubleshooting

### Report generation fails
**Solution:** Ensure PowerShell is installed and accessible:
```powershell
pwsh.exe --version
```

### PDF not generated
**Solution:** Check that your plan file is valid Terraform output:
```bash
terraform show -no-color plan.tfplan > plan.txt
```

### Extension not appearing
**Solution:** Reload VS Code after installation:
- Press `Ctrl+Shift+P`
- Type "Reload Window"
- Press Enter

**Still having issues?** [Open an issue](https://github.com/ganesh250684/TerraformReportExtension/issues) with:
- VS Code version
- Extension version
- Error message (if any)
- Sample plan file (sanitized)

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details.

**TL;DR:** Free to use, modify, and distribute. No restrictions!

## 🙏 Acknowledgments

- 🎯 **Built for DevOps Engineers** who spend too much time reading Terraform output
- 💡 **Inspired by real pain** - We've all been there!
- 🌟 **Powered by the community** - Your feedback makes this better
- ❤️ **Open source forever** - Because great tools should be free

## � Support & Community

- 🐛 [Report a Bug](https://github.com/ganesh250684/TerraformReportExtension/issues/new?template=bug_report.md)
- 💡 [Request a Feature](https://github.com/ganesh250684/TerraformReportExtension/issues/new?template=feature_request.md)
- 💬 [Discussion Forum](https://github.com/ganesh250684/TerraformReportExtension/discussions)
- 📧 [Email Support](mailto:support@example.com)

## ⭐ Show Your Support

If this extension saves you time, please:
- ⭐ **Star the repo** on [GitHub](https://github.com/ganesh250684/TerraformReportExtension)
- ✍️ **Write a review** on [VS Code Marketplace](https://marketplace.visualstudio.com/)
- 🐦 **Share it** with your team and on social media
- ☕ **Buy us a coffee** (link coming soon!)

---

<div align="center">

**Made with ❤️ for the DevOps community**

_Stop squinting at terminal output. Start shipping with confidence._

[Install Now](https://marketplace.visualstudio.com/) | [View on GitHub](https://github.com/ganesh250684/TerraformReportExtension) | [Read the Blog](https://github.com/ganesh250684/TerraformReportExtension/blob/main/BLOG.md)

</div>
