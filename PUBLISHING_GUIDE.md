# Publishing Terraform Report Generator to VS Code Marketplace

This guide walks you through publishing your extension to the Visual Studio Code Marketplace.

## ✅ Prerequisites Completed

- [x] Extension packaged as `.vsix` file
- [x] GitHub repository created and pushed
- [x] Documentation complete (README, CHANGELOG, etc.)
- [x] All files compiled and tested

## 📦 What We Have

- **VSIX Package:** `terraform-report-generator-1.0.0.vsix` (218.58 KB)
- **GitHub Repo:** https://github.com/ganesh250684/TerraformReportExtension
- **Repository Status:** Private (as requested)

## 🚀 Steps to Publish

### Step 1: Create a Microsoft Publisher Account

1. **Go to Visual Studio Marketplace Publisher Management**
   - Visit: https://marketplace.visualstudio.com/manage
   - Sign in with your Microsoft account (or create one)

2. **Create a Publisher**
   - Click "Create publisher"
   - **Publisher ID:** `ganesh250684` (must match package.json)
   - **Publisher Name:** Your display name (e.g., "Ganesh")
   - **Verified email:** Required for publishing

> **Note:** The publisher ID `ganesh250684` is already set in your `package.json`. Make sure it matches exactly!

### Step 2: Get a Personal Access Token (PAT)

1. **Go to Azure DevOps**
   - Visit: https://dev.azure.com
   - Sign in with the same Microsoft account

2. **Create PAT**
   - Click your profile icon (top right) → **Security**
   - Click **Personal Access Tokens** → **+ New Token**
   - **Name:** "VS Code Extension Publishing"
   - **Organization:** All accessible organizations
   - **Expiration:** 90 days (or custom)
   - **Scopes:** Select **Marketplace** → Check **Manage**
   - Click **Create**

3. **Copy the Token**
   - ⚠️ **Important:** Copy it now! You won't see it again
   - Save it securely (password manager recommended)

### Step 3: Login with vsce

Open PowerShell in your project directory and run:

```powershell
# Login to marketplace
vsce login ganesh250684
```

When prompted, paste your Personal Access Token.

**Expected output:**
```
Successfully logged in as ganesh250684
```

### Step 4: Publish the Extension

```powershell
# Publish to marketplace (will use existing .vsix)
vsce publish
```

**Alternative - Manual Upload:**
If you prefer manual upload:
1. Go to https://marketplace.visualstudio.com/manage
2. Click "New extension" → "Visual Studio Code"
3. Upload `terraform-report-generator-1.0.0.vsix`
4. Fill in any additional marketplace details

### Step 5: Verify Publication

After publishing:
1. **Wait 5-10 minutes** for the extension to appear
2. Visit: https://marketplace.visualstudio.com/items?itemName=ganesh250684.terraform-report-generator
3. Check that all information displays correctly
4. Test installation from marketplace

### Step 6: Install and Test

```powershell
# Install from marketplace
code --install-extension ganesh250684.terraform-report-generator

# Or search in VS Code Extensions (Ctrl+Shift+X)
# Search: "Terraform Report Generator"
```

## 🎨 Optional: Add Extension Icon

For better visibility in the marketplace:

1. **Create or find an icon:**
   - Size: 128x128 pixels (PNG format)
   - Represents Terraform/reports
   - Professional looking

2. **Add to project:**
   ```
   resources/icon.png
   ```

3. **Update package.json:**
   ```json
   "icon": "resources/icon.png",
   ```

4. **Repackage and publish update:**
   ```powershell
   npm run package
   vsce publish patch
   ```

## 📊 Post-Publication Checklist

- [ ] Extension appears on marketplace
- [ ] README renders correctly
- [ ] All commands work when installed from marketplace
- [ ] Screenshots/images display properly (if added)
- [ ] Installation instructions are accurate
- [ ] GitHub link works

## 🔄 Publishing Updates

When you make changes to your extension:

```powershell
# Update version number in package.json
# Then publish with version bump:

# For bug fixes:
vsce publish patch      # 1.0.0 → 1.0.1

# For new features:
vsce publish minor      # 1.0.0 → 1.1.0

# For breaking changes:
vsce publish major      # 1.0.0 → 2.0.0
```

## 🎯 Making Your Private Repo Public (Optional)

Your GitHub repo is currently private. To make it public later:

```powershell
# Via GitHub CLI
gh repo edit ganesh250684/TerraformReportExtension --visibility public

# Or manually:
# 1. Go to https://github.com/ganesh250684/TerraformReportExtension
# 2. Settings → Scroll down → "Change visibility" → "Change to public"
```

## 📈 Marketing Your Extension

After publishing:

### 1. Update Repository
- Make repo public (if desired)
- Add marketplace badge to README:
  ```markdown
  [![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/ganesh250684.terraform-report-generator)](https://marketplace.visualstudio.com/items?itemName=ganesh250684.terraform-report-generator)
  [![Installs](https://img.shields.io/visual-studio-marketplace/i/ganesh250684.terraform-report-generator)](https://marketplace.visualstudio.com/items?itemName=ganesh250684.terraform-report-generator)
  ```

### 2. Share the Blog Post
Your compelling blog post is ready in `BLOG.md`:
- Publish to Medium, Dev.to, or Hashnode
- Share on LinkedIn, Twitter/X, Reddit (r/devops, r/terraform)
- Post in Terraform community forums

### 3. Social Media Posts

**LinkedIn/Twitter Template:**
```
🚀 Just launched my first VS Code extension!

Tired of reading 500+ lines of Terraform plan output? 

I built a tool that transforms that chaos into beautiful PDF reports in 2 seconds.

✅ 100% Free
✅ Works offline
✅ Saves hours every week

Check it out: [marketplace link]

#DevOps #Terraform #VSCode #OpenSource
```

### 4. Get Early Users
- Share with your team
- Post in DevOps Slack/Discord communities
- Ask for reviews and feedback

## 🐛 Common Issues

### "Publisher not found"
**Solution:** Ensure publisher ID matches exactly in package.json and marketplace account

### "Extension validation failed"
**Solution:** Run `vsce package` first to check for issues before publishing

### "Authentication failed"
**Solution:** Regenerate PAT token and login again: `vsce login ganesh250684`

### "Icon not found"
**Solution:** Remove icon field from package.json or add the actual icon file

## 📞 Need Help?

- **vsce Documentation:** https://code.visualstudio.com/api/working-with-extensions/publishing-extension
- **Marketplace Management:** https://marketplace.visualstudio.com/manage
- **GitHub Issues:** https://github.com/ganesh250684/TerraformReportExtension/issues

## 🎉 Success Criteria

You'll know you're done when:
- ✅ Extension appears in VS Code Marketplace
- ✅ Users can search and find it
- ✅ Installation works via marketplace
- ✅ All features work as expected
- ✅ Documentation is accurate

---

## Quick Reference Commands

```powershell
# Login to marketplace
vsce login ganesh250684

# Publish extension (first time)
vsce publish

# Update and republish
vsce publish patch        # Bug fixes (1.0.0 → 1.0.1)
vsce publish minor        # New features (1.0.0 → 1.1.0)
vsce publish major        # Breaking changes (1.0.0 → 2.0.0)

# Package without publishing
npm run package

# Test locally
code --install-extension terraform-report-generator-1.0.0.vsix

# Unpublish (if needed - careful!)
vsce unpublish ganesh250684.terraform-report-generator
```

---

**You're ready to publish! 🚀**

Follow the steps above, and your extension will be live on the VS Code Marketplace within minutes.

Good luck! 🍀
