$expected = "00_Мета","01_Лекции","02_Домашние-работы","03_Пет-проект"
foreach ($folder in $expected) {
if (-not (Test-Path -PathType Container $folder)) {
throw "Нет папки: $folder"
}
}
"Структура в порядке: $($expected.Count) папки на месте"
