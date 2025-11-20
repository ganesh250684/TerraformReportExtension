# Contributing to Terraform Report Generator

First off, thank you for considering contributing to Terraform Report Generator! 🎉

It's people like you that make this tool better for the entire DevOps community.

## 🌟 Ways to Contribute

There are many ways you can contribute:

### 🐛 Report Bugs
Found a bug? Help us squash it!

**Before submitting:**
- Check if the bug has already been reported in [Issues](https://github.com/ganesh250684/TerraformReportExtension/issues)
- Make sure you're using the latest version

**When reporting:**
- Use a clear, descriptive title
- Describe exact steps to reproduce
- Include VS Code version, extension version, and OS
- Add error messages and screenshots if applicable
- Attach a sanitized sample plan file if possible

### 💡 Suggest Features
Have an idea to make this better?

**Before suggesting:**
- Check if it's already in our [Roadmap](README.md#-roadmap---whats-coming-next)
- Search existing feature requests

**When suggesting:**
- Use a clear, descriptive title
- Explain the problem you're trying to solve
- Describe your proposed solution
- Explain why this would be useful to most users

### 📝 Improve Documentation
Documentation can always be better!

- Fix typos or unclear instructions
- Add examples or use cases
- Improve API documentation
- Translate docs to other languages

### 💻 Submit Code
Want to fix a bug or implement a feature?

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- VS Code 1.80+
- PowerShell 7+ (for testing)
- Git

### Setup Development Environment

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR-USERNAME/TerraformReportExtension.git
   cd TerraformReportExtension
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Open in VS Code**
   ```bash
   code .
   ```

4. **Compile TypeScript**
   ```bash
   npm run compile
   ```

5. **Run Extension**
   - Press `F5` to open Extension Development Host
   - Test your changes in the new VS Code window

### Project Structure
```
TerraformReportExtension/
├── src/                      # TypeScript source files
│   └── extension.ts         # Main extension code
├── scripts/                 # PowerShell scripts
│   ├── generate_basic_report.ps1
│   ├── parse_terraform_basic.ps1
│   └── create_basic_pdf.ps1
├── samples/                 # Sample plan files for testing
├── resources/               # Extension resources (icons, etc.)
├── package.json            # Extension manifest
├── tsconfig.json           # TypeScript configuration
└── README.md               # Extension documentation
```

## 📋 Development Workflow

### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 2. Make Your Changes
- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update tests if applicable

### 3. Test Your Changes
```bash
# Compile
npm run compile

# Lint
npm run lint

# Test in VS Code (F5)
# Try various scenarios:
# - Different plan files
# - Error cases
# - Edge cases
```

### 4. Commit Your Changes
Use conventional commit messages:
```bash
git commit -m "feat: add plan comparison feature"
git commit -m "fix: handle empty plan files"
git commit -m "docs: update installation instructions"
```

**Commit types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### 5. Push and Create PR
```bash
git push origin your-branch-name
```

Then create a Pull Request on GitHub with:
- Clear title describing the change
- Description of what and why
- Reference any related issues (#123)
- Screenshots if UI changes

## 🎨 Code Style Guidelines

### TypeScript
- Use TypeScript strict mode
- Prefer `const` over `let`
- Use descriptive variable names
- Add JSDoc comments for public functions
- Handle errors gracefully

```typescript
/**
 * Generates a Terraform report from a plan file
 * @param filePath - Absolute path to the Terraform plan file
 * @param mode - Generation mode: 'auto', 'basic', or 'ai'
 * @returns Promise<void>
 */
async function generateReport(filePath: string, mode: ReportMode): Promise<void> {
    // Implementation
}
```

### PowerShell
- Use approved PowerShell verbs
- Add comment-based help
- Handle errors with try/catch
- Use Write-Host for user feedback with colors

```powershell
<#
.SYNOPSIS
    Parses Terraform plan output
.DESCRIPTION
    Extracts resource changes and generates structured data
.PARAMETER PlanFile
    Path to the Terraform plan output file
#>
param(
    [string]$PlanFile
)
```

## 🧪 Testing

### Manual Testing Checklist
Before submitting a PR, test:
- [ ] Command palette commands work
- [ ] Context menu works (right-click on .txt file)
- [ ] Reports generate successfully
- [ ] PDF opens correctly
- [ ] Configuration settings work
- [ ] Error messages are helpful
- [ ] Works with various plan sizes (small, medium, large)
- [ ] Edge cases (empty plan, no changes, etc.)

### Test Files
Use sample plan files in `samples/` directory:
- `planQC20NovGN-output.txt` - Basic test case
- Add your own test cases if needed

## 📦 Building and Publishing

### Create VSIX Package
```bash
npm run package
```

This creates `terraform-report-generator-1.0.0.vsix`

### Test VSIX Locally
```bash
code --install-extension terraform-report-generator-1.0.0.vsix
```

## 🐛 Debugging Tips

### Enable Extension Development Mode
1. Open extension project in VS Code
2. Press `F5` to launch Extension Development Host
3. Set breakpoints in TypeScript code
4. Use Debug Console to inspect variables

### View Extension Logs
- Open Output panel: View → Output
- Select "Terraform Report Generator" from dropdown
- Check for errors or warnings

### Common Issues

**Extension doesn't activate:**
- Check activation events in `package.json`
- Verify command IDs match registration

**Commands not showing:**
- Check command registration in `extension.ts`
- Verify package.json contribution points

**PowerShell script fails:**
- Test script directly: `pwsh.exe -File script.ps1`
- Check execution policy
- Verify script paths

## 📄 Documentation

When adding features, update:
- `README.md` - User-facing documentation
- `CHANGELOG.md` - Version history
- Code comments - For maintainers
- Configuration schema in `package.json`

## ✅ Pull Request Checklist

Before submitting, ensure:
- [ ] Code compiles without errors
- [ ] Lint passes (`npm run lint`)
- [ ] Tested manually in VS Code
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Commit messages follow convention
- [ ] PR description is clear
- [ ] No unnecessary files committed

## 🤝 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Publishing others' private information
- Other unethical or unprofessional conduct

## 📞 Getting Help

Need help contributing?
- 💬 [Discussions](https://github.com/ganesh250684/TerraformReportExtension/discussions)
- 📧 Email: support@example.com
- 📖 [VS Code Extension API Docs](https://code.visualstudio.com/api)

## 🎉 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Thanked in the community!

---

**Thank you for making Terraform Report Generator better!** 🙏

Your contributions help thousands of DevOps engineers work more efficiently.
