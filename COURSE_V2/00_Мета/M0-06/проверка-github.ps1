$root = "C:\Users\lfyz\QA-Learning-2026"
Set-Location $root
$failed = 0
$remote = git remote get-url origin
$branch = git branch --show-current
$upstream = git rev-parse --abbrev-ref "@{u}" 2>$null
$dirty = git status --porcelain
$remoteOk = $remote -like "git@github.com:*"
$readmePath = "$root\README.md"
$readmeOk = $false
if (Test-Path $readmePath) {
$text = Get-Content $readmePath -Raw -Encoding UTF8
$readmeOk = ($text.Length -gt 200) -and ($text -match "## Как запустить")
}
$sshOut = (ssh -T git@github.com 2>&1) -join " "
$sshOk = $sshOut -match "successfully authenticated"
$checks = @(
@{ Name = "remote на SSH"; Pass = $remoteOk; Info = "$remote" },
@{ Name = "ветка main"; Pass = ($branch -eq "main"); Info = "$branch" },
@{ Name = "upstream задан"; Pass = [bool]$upstream; Info = "нет" },
@{ Name = "копия чистая"; Pass = (-not $dirty); Info = "$dirty" },
@{ Name = "README с разделом"; Pass = $readmeOk; Info = "нет" },
@{ Name = "SSH вход работает"; Pass = $sshOk; Info = "$sshOut" }
)
foreach ($c in $checks) {
if ($c.Pass) { Write-Host "OK $($c.Name)" }
else { Write-Host "FAIL $($c.Name) : $($c.Info)"; $failed++ }
}
if ($failed -gt 0) { throw "Провалено проверок: $failed" }
"GitHub в порядке: $($checks.Count) из $($checks.Count)"
