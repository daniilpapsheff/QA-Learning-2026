// 1. Строка (string)
const userName: string = "QA_Automator_2026";
// 2. Число (number)
const failedTests: number = 5;
// 3. Логический тип (boolean)
// Вспомните М1-04: мы использовали true/false для VIP-статуса.
const isVip: boolean = true;
// 4. Null (намеренная пустота)
// Допустим, у пользователя пока нет номера телефона.
const phoneNumber: null = null;
// 5. Undefined (не определено)
// Переменная создана, но значение не задано.
let currentTest: undefined;
// --- ВЫВОД ТИПОВ ---
// Оператор "typeof" возвращает строку с названием типа переменной.
// Это очень полезно для отладки (Debugging).
console.log(`Переменная userName имеет тип: ${typeof userName}`);
console.log(`Переменная failedTests имеет тип: ${typeof failedTests}`);
console.log(`Переменная isVip имеет тип: ${typeof isVip}`);
console.log(`Переменная phoneNumber имеет тип: ${typeof phoneNumber}`);
console.log(`Переменная currentTest имеет тип: ${typeof currentTest}`);