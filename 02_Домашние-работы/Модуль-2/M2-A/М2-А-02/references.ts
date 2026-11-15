let a: number = 10;
let b: number = a;

b = 20;

console.log(`Переменная a: ${a}`);
console.log(`Переменная b: ${b}`);

const tests1: string[] = ["Login", "Logout"];
const tests2: string[] = tests1;
tests2.push("Profile");

console.log("\n--- Ловушка ссылок ---");
console.log("tests1:", tests1);
console.log("tests2:", tests2);

const originalTests: string[] = ["Login", "Logout"];
const copiedTests: string[] = [...originalTests];

copiedTests.push("Profile");

console.log("\n--- Безопасное копирование ---");
console.log("Оригинал:", originalTests); // Выведет ["Login", "Logout"] (Безопасно!)
console.log("Копия:", copiedTests);      // Выведет ["Login", "Logout", "Profile"]

// --- 4. АНАЛОГИЯ С ОБЪЕКТАМИ ---
const user1 = { name: "Daniil", role: "QA" };
const user2 = { ...user1 }; // Копируем все свойства из user1 в новый объект user2

user2.role = "Senior QA";

console.log("\n--- Копирование объекта ---");
console.log("user1:", user1); // role осталась "QA"
console.log("user2:", user2); // role стала "Senior QA"