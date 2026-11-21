$root = "C:\Users\lfyz\QA-Learning-2026"
Set-Location $root
$failed = 0
$ignorePath = "$root\.gitignore"
$ignoreText = ""
if (Test-Path $ignorePath) {
$ignoreText = Get-Content $ignorePath -Raw -Encoding UTF8
}
$hasNode = $ignoreText -match "node_modules"
$hasEnv = $ignoreText -match "\.env"
$hasLog = $ignoreText -match "\*\.log"
$nodeInIndex = git ls-files node_modules
$nodeClean = -not $nodeInIndex
$glossPath = "$root\COURSE_V2\00_Мета\глоссарий.md"
$terms = 0
if (Test-Path $glossPath) {
$rows = Get-Content $glossPath -Encoding UTF8 |
Where-Object { $_ -match "^\|" }
$terms = $rows.Count - 2
}
$trackerPath = "$root\COURSE_V2\00_Мета\трекер.md"
$trackerOk = $false
if (Test-Path $trackerPath) {
$t = Get-Content $trackerPath -Raw -Encoding UTF8
$trackerOk = $t -match "М0-07"
}
$dirty = git status --porcelain
$checks = @(
@{ Name = "gitignore есть"; Pass = (Test-Path $ignorePath) },
@{ Name = "node_modules закрыт"; Pass = $hasNode },
@{ Name = ".env закрыт"; Pass = $hasEnv },
@{ Name = "*.log закрыт"; Pass = $hasLog },
@{ Name = "node_modules вне индекса"; Pass = $nodeClean },
@{ Name = "глоссарий 15 терминов"; Pass = ($terms -ge 15) },
@{ Name = "трекер про М0-07"; Pass = $trackerOk },
@{ Name = "копия чистая"; Pass = (-not $dirty) }
)
foreach ($c in $checks) {
if ($c.Pass) { Write-Host "OK $($c.Name)" }
else { Write-Host "FAIL $($c.Name)"; $failed++ }
}
if ($failed -gt 0) { throw "Провалено проверок: $failed" }
"Порядок в порядке: $($checks.Count) из $($checks.Count)"
