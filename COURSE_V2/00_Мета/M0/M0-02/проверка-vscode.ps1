$path = ".vscode\settings.json"
if (-not (Test-Path -PathType Leaf $path)) { throw "Нет файла: $path" }
$raw = Get-Content $path -Raw -Encoding UTF8
try {
$cfg = $raw | ConvertFrom-Json
} catch {
throw "settings.json не разбирается: проверь запятые и кавычки"
}
$checks = @(
@{ Key = "editor.formatOnSave"; Expected = $true },
@{ Key = "editor.defaultFormatter"; Expected = "esbenp.prettier-vscode" },
@{ Key = "files.encoding"; Expected = "utf8" },
@{ Key = "files.trimTrailingWhitespace"; Expected = $true }
)
$failed = 0
foreach ($c in $checks) {
$actual = $cfg.($c.Key)
if ($actual -ne $c.Expected) {
Write-Host "FAIL $($c.Key): ждали $($c.Expected), получили $actual"
$failed++
} else {
Write-Host "OK $($c.Key)"
}
}
if ($failed -gt 0) { throw "Провалено проверок: $failed" }
"Настройки в порядке: $($checks.Count) из $($checks.Count)"
