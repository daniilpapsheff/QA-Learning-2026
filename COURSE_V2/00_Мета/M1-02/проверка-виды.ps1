$root = "C:\Users\lfyz\QA-Learning-2026"
Set-Location $root
$failed = 0
$f = "$root\COURSE_V2\02_Домашние-работы\M1-01\карта-проверок.md"
$exists = Test-Path $f
$text = ""
$rows = 0
$heads = 0
if ($exists) {
$text = Get-Content $f -Raw -Encoding UTF8
$rows = (Get-Content $f -Encoding UTF8 |
Where-Object { $_ -match "^\|\s*\d+" }).Count
$heads = (Get-Content $f -Encoding UTF8 |
Where-Object { $_ -match "^##\s" }).Count
}
$pos = $text -match "позитив"
$neg = $text -match "негатив"
$reg = $text -match "регрессион"
$nfn = $text -match "производительность|безопасность|совместимость|удобство"
$checks = @(
@{ Name = "карта существует"; Pass = $exists },
@{ Name = "3 раздела с ##"; Pass = ($heads -ge 3) },
@{ Name = "12 строк проверок"; Pass = ($rows -ge 12) },
@{ Name = "есть позитивные"; Pass = $pos },
@{ Name = "есть негативные"; Pass = $neg },
@{ Name = "есть регрессионная"; Pass = $reg },
@{ Name = "есть нефункциональные"; Pass = $nfn }
)
foreach ($c in $checks) {
if ($c.Pass) { Write-Host "OK $($c.Name)" }
else { Write-Host "FAIL $($c.Name)"; $failed++ }
}
if ($failed -gt 0) { throw "Провалено проверок: $failed" }
"Карта проверок готова: $($checks.Count) из $($checks.Count)"
