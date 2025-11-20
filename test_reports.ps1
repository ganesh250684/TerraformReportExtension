# Test Script - Run from project root
param([string]$PlanFile = ".\samples\planQC20NovGN-output.txt")
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
& "$scriptPath\scripts\parse_terraform_basic.ps1" -PlanFile $PlanFile
if ($LASTEXITCODE -eq 0 -or $null -eq $LASTEXITCODE) {
    & "$scriptPath\scripts\create_basic_pdf.ps1"
}
