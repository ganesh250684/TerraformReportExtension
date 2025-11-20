# Terraform Report Generator

> Transform Terraform plan output into beautiful, human-readable PDF reports with intelligent analysis.

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue)](https://marketplace.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 📊 **Instant Reports** - Convert Terraform plan output to professional PDFs in seconds
- 🤖 **AI-Powered Analysis** - Get intelligent impact assessments and risk analysis (optional)
- 🔒 **Privacy First** - Basic mode works 100% offline with no external dependencies
- 💰 **Free Forever** - Basic reports with unlimited usage, no cost
- 🎨 **Beautiful Output** - Clean, professional PDFs perfect for stakeholder reviews

## 🚀 Quick Start

1. Install the extension from VS Code Marketplace
2. Open a Terraform plan output file (`.txt`)
3. Run command: `Terraform: Generate Plan Report`
4. Choose report type (Basic or AI-Enhanced)
5. View your beautiful PDF report!

## 📸 Screenshots

_Coming soon - Extension in development_

## 🎯 Use Cases

### For DevOps Teams
- 📋 **Change Documentation** - Automatic documentation for infrastructure changes
- 👥 **Stakeholder Reviews** - Non-technical summaries for management approval
- 🔍 **Audit Trails** - Comprehensive records for compliance and security reviews
- 🧪 **Testing Checklists** - AI-generated test plans for each deployment

### For Developers
- ⚡ **Quick Reviews** - Instantly understand what's changing in infrastructure
- 📊 **Visual Clarity** - Tables and formatted output vs raw Terraform text
- 🎓 **Learning Tool** - Understand impact of different resource changes

## 🛠️ Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Terraform Report Generator"
4. Click Install

### From VSIX File
```bash
code --install-extension terraform-report-generator-1.0.0.vsix
```

## 📚 How It Works

### Basic Mode (No AI)
```
Terraform Plan → Parser → Markdown → PDF
                 ↓
            - Extract changes
            - List resources
            - Show attributes
            
Result: Clean, formatted report in 2 seconds
```

### AI-Enhanced Mode
```
Terraform Plan → Parser → AI Analysis → Rich Report → PDF
                          ↓
                    - Impact assessment
                    - Risk classification
                    - Testing recommendations
                    - Rollback procedures
                    
Result: Comprehensive analysis in 30 seconds
```

## ⚙️ Configuration

```jsonc
{
  // Report generation mode
  "terraformReport.mode": "auto",  // auto | basic | ai
  
  // AI provider
  "terraformReport.aiProvider": "builtin",  // builtin | openai | none
  
  // Your OpenAI API key (optional, for unlimited AI reports)
  "terraformReport.openAiKey": "",
  
  // Auto-detect when to use AI
  "terraformReport.autoDetectThreshold": {
    "destroyCount": 1,      // Use AI if any resources destroyed
    "changeCount": 10,      // Use AI if > 10 resources changed
    "totalChanges": 15      // Use AI if > 15 total changes
  },
  
  // Export preferences
  "terraformReport.defaultExport": "pdf",  // pdf | markdown | both
  "terraformReport.openAfterGenerate": true
}
```

## 💰 Pricing

### Free Tier
- ✅ **Unlimited basic reports** (no AI)
- ✅ **10 AI-enhanced reports per month**
- ✅ PDF and Markdown export
- ✅ Community support

### Pro Tier - $9.99/month
- ✅ **Unlimited AI-enhanced reports**
- ✅ Historical change tracking
- ✅ Custom report templates
- ✅ Priority support
- ✅ Advanced export formats

### Enterprise - $49.99/month
- ✅ Everything in Pro
- ✅ Self-hosted option
- ✅ Bring your own OpenAI key
- ✅ SSO integration
- ✅ Dedicated support

## 🔧 Commands

| Command | Description |
|---------|-------------|
| `Terraform: Generate Plan Report` | Generate report from active file |
| `Terraform: Generate Basic Report` | Force basic mode (no AI) |
| `Terraform: Generate AI Report` | Force AI-enhanced mode |
| `Terraform: Compare Plans` | Compare two plans (Pro feature) |
| `Terraform: View Report History` | See past reports (Pro feature) |

## 📖 Documentation

- [Getting Started Guide](docs/getting-started.md)
- [Configuration Options](docs/configuration.md)
- [Report Examples](docs/examples.md)
- [Troubleshooting](docs/troubleshooting.md)
- [API Documentation](docs/api.md)

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 🐛 Issues & Support

- 🐛 [Report a bug](https://github.com/yourusername/terraform-report-generator/issues)
- 💡 [Request a feature](https://github.com/yourusername/terraform-report-generator/issues)
- 💬 [Community Discord](https://discord.gg/your-invite)

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Built for the DevOps community
- Inspired by real-world pain points with Terraform plan readability
- Powered by OpenAI GPT-4 for intelligent analysis

## 🔗 Links

- [VS Code Marketplace](https://marketplace.visualstudio.com/)
- [GitHub Repository](https://github.com/yourusername/terraform-report-generator)
- [Documentation](https://docs.terraform-report-generator.dev)
- [Blog](https://blog.terraform-report-generator.dev)

---

**Made with ❤️ for the DevOps community**

_Transform your Terraform plans from cryptic output to crystal-clear reports._
