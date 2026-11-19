const failedTestIds: number[] = [101, 102, 101, 103, 102];

const uniqueFailedIds = new Set(failedTestIds);

console.log("Исходный массив с дублями:", failedTestIds);
console.log("Уникальные ID (Set):", uniqueFailedIds);
console.log("Количество уникальных падений (.size):", uniqueFailedIds.size);
// Мгновенная проверка наличия через .has()
console.log(`Упал ли тест 102? -> ${uniqueFailedIds.has(102)}`)
console.log(`Упал ли тест 999? -> ${uniqueFailedIds.has(999)}`)

// ПРОФ-ПРИЁМ: Превращаем Set обратно в обычный массив через Spread [...] (из М2-А-02)
const uniqueArray: number[] = [...uniqueFailedIds];
console.log("Обратно в массив без дублей:", uniqueArray);

// --- 2. РАБОТА С MAP (Словарь ключ-значение) ---
const userMap = new Map<number, string>();

userMap.set(1, "Даниил");
userMap.set(2, "Иван");
userMap.set(3, "Алексей");

// Если вызвать .set() с тем же ключом, значение обновится:
userMap.set(1, "Даниил (Senior QA)");

// Получаем имя по ID через .get()
const userName: string | undefined = userMap.get(2);
console.log(`\nИмя пользователя с ID 2: ${userName}`); 
console.log(`Имя пользователя с ID 1: ${userMap.get(1)}`);
console.log(`есть ли пользователь с ID 4? -> ${userMap.has(4)}`);
console.log(`Всего пользователей в Map (.size): ${userMap.size}`);

// --- 3. МЕТОД FOREACH (Обход элементов без создания нового массива) ---
uniqueArray.forEach((id: number) => {
    console.log(`Отправляем баг-репорт по упавшему тесту №${id}`)
})