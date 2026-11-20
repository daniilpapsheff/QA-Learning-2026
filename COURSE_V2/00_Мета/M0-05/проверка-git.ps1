$root = "C:\Users\lfyz\QA-Learning-2026"
set-location $root
$failed = 0
if (-not (Test-Path "$root\.git")) { throw "нет .git в $root" }

$name = git config user.name
$email = git config user.email
$dirty = git status --porcelain
$ignored = git check-ignore node_modules
$commits = 0
if (git rev-parse --verif HEAD 2>$null) {
    $commits = [int](git rev-list --count HEAD)
}
$checks = @(
@{ Name = "user.name задан"; Pass = [bool]$name; Info = "пусто" },
@{ Name = "user.email задан"; Pass = [bool]$email; Info = "пусто" },
@{ Name = "копия чистая"; Pass = (-not $dirty); Info = "$dirty" },
@{ Name = "node_modules в игноре"; Pass = [bool]$ignored; Info = "-" },
@{ Name = "4 коммита и больше"; Pass = ($commits -ge 4); Info = "$commits" }
)
foreach ($c in $checks) {
    if($c.Pass) { Write-Host "OK $($c.Name)"}
    else { Write-Host "FAIL $($c.Name) : $($c.Info)" $failed++ }
}
if ($failed -gt 0) {throw "Провалено проверок: $failed"}
"Git в порядке: $($checks.Count) из $($checks.Count)"
