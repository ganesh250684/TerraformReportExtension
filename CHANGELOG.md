# Changelog

All notable changes to the "Terraform Report Generator" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-20

### 🎉 Initial Release

#### Added
- ✨ **Core Functionality**
  - Generate professional PDF reports from Terraform plan output
  - Parse Terraform plans and extract resource changes
  - Color-coded actions: ➕ Create, 🔄 Update, ❌ Destroy, 🔁 Replace
  - Clean, tabular format for easy scanning

- 📋 **VS Code Integration**
  - Command Palette integration
  - Context menu for `.txt` files
  - Explorer context menu
  - Three generation modes: Auto, Basic, AI-Enhanced (AI coming soon)

- 🎨 **Report Features**
  - Summary statistics (add, change, destroy counts)
  - Detailed resource-by-resource breakdown
  - Attribute change listings
  - Professional PDF styling
  - Markdown export option

- ⚙️ **Configuration**
  - Mode selection (auto/basic/ai)
  - Export format preference
  - Auto-open after generation
  - Template style options

- 📚 **Documentation**
  - Comprehensive README with examples
  - Configuration guide
  - Troubleshooting section
  - Real-world use cases

#### Features
- 🚀 Lightning-fast report generation (< 2 seconds)
- 🔒 100% offline operation (no external dependencies)
- 💰 Completely free, unlimited usage
- 📊 Professional PDF output
- 🎯 Purpose-built for DevOps workflows

### Known Issues
- AI-enhanced mode not yet implemented (marked as "Coming Soon")
- Requires PowerShell to be installed
- Windows-optimized (cross-platform support in future versions)

---

## [Unreleased]

### Planned for 1.1.0
- 🤖 AI-powered impact analysis
- 🔍 Plan comparison features
- 📈 Drift detection
- 🎨 Additional PDF templates

### Planned for 1.2.0
- 📋 Change history tracking
- 🔗 CI/CD integrations
- 📊 Dashboard view
- 🎨 Custom template builder

### Planned for 2.0.0
- 🧠 Advanced AI features
- 👥 Team collaboration
- 📱 Mobile companion app
- 🔒 Enterprise features

---

## Version History

- **1.0.0** (2025-11-20) - Initial public release

---

## Upgrade Notes

### From 0.x.x to 1.0.0
This is the first public release. If you were using a pre-release version:
- Uninstall the old extension
- Install version 1.0.0 from marketplace
- Update settings (see README for new schema)

---

## Feedback

We love hearing from our users! 

- 🐛 **Found a bug?** [Report it](https://github.com/ganesh250684/TerraformReportExtension/issues/new?template=bug_report.md)
- 💡 **Have an idea?** [Suggest it](https://github.com/ganesh250684/TerraformReportExtension/issues/new?template=feature_request.md)
- ⭐ **Enjoying the extension?** [Leave a review](https://marketplace.visualstudio.com/)

---

**Thank you for using Terraform Report Generator!** 🙏
