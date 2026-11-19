$sb = "C:\Users\lfyz\QA-Learnining-2026\COURSE_V2\02_Домашние-работы\M0\M0-03\песочница"
if (-not (Test-Path -PathType Container $sb)) { throw "Нет песочницы: $sb" }
$expected = @{
"Файлов в песочнице" = 12
"Файлов в архиве" = 5
"Файлов в корзине" = 0
}
$actual = @{
"Файлов в песочнице" = (Get-ChildItem $sb -File).Count
"Файлов в архиве" = (Get-ChildItem "$sb\архив" -File).Count
"Файлов в корзине" = (Get-ChildItem "$sb\_trash" -File).Count
}
$failed = 0
foreach ($key in $expected.Keys) {
if ($actual[$key] -ne $expected[$key]) {
$want = $expected[$key]; $got = $actual[$key]
Write-Host "FAIL $key : ждали $want, получили $got"
$failed++
} else {
Write-Host "OK $key : $($actual[$key])"
}
}
if ($failed -gt 0) { throw "Провалено проверок: $failed" }
"Песочница в порядке: $($expected.Count) из $($expected.Count)"
