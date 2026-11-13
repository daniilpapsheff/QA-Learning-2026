function isValidEmail(email: string): boolean {
    return email.includes("@") && email.includes(".");
}
console.time("Unit Test");

const result1 = isValidEmail("test@example.com");

const result2 = isValidEmail("testexamle.com");
console.log("Тест 1 (корректный email):", result1 === true ? "ПРОШЕЛ" : "УПАЛ");
console.log("Тест 2 (некорректный email):", result2 === false ? "ПРОШЕЛ" : "УПАЛ");

console.timeEnd("Unit Test")


// // Функция, которую мы тестируем (наш "кирпичик").
// // Она принимает строку (email) и возвращает boolean (true/false).
// function isValidEmail(email: string): boolean {
//     // Проверяем, есть ли в строке символ "@" и символ "."
//     // Метод .includes() возвращает true, если подстрока найдена.
//     return email.includes("@") && email.includes(".");
// }
// // --- НАЧАЛО ТЕСТА ---
// // console.time() запускает секундомер с меткой "Unit Test".
// console.time("Unit Test");
// // Вызываем нашу функцию с корректными данными.
// const result1 = isValidEmail("test@example.com");
// // Вызываем функцию с некорректными данными (нет @).
// const result2 = isValidEmail("testexample.com");
// // Проверяем результаты (имитация expect из Playwright).
// // Если result1 === true, выводим "ПРОШЕЛ".
// // Если result2 === false, выводим "ПРОШЕЛ".
// console.log("Тест 1 (корректный email):", result1 === true ? "ПРОШЕЛ" : "УПАЛ");
// console.log("Тест 2 (некорректный email):", result2 === false ? "ПРОШЕЛ" : "УПАЛ");
// // Останавливаем секундомер и выводим время.
// console.timeEnd("Unit Test");