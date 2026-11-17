// Перебор значений и прерывание

const testCases: string[] = ["Login", "Catalog", "Payment", "Profile", "Settings"];

console.log("=== Роль 1 и 4: Перебор и остановка по break ===");

for (const testName of testCases) {
    console.log(`Запускаем тест: ${testName}`);

    if (testName === "Payment") {
        console.log("Найден критический тест. Останавливаем прогон!");
        break;
    }
};

// --- Роль 2: Доступ к индексу ---

const browsers: string[] = ["Chrome", "Firefox", "Safari"];

console.log("--- Роль 2: Использование .entries() ---");
for (const [index, browser] of browsers.entries()) {
    console.log(`Браузер No${index + 1}: ${browser}`)
}

// --- Роль 4: Continue (Пропустить итерацию) ---

const testResults = ["PASSED", "SKIPPED", "FAILED", "PASSED"];
console.log("\n--- Роль 4: Использование continue ---");

for (const result of testResults) {
    if (result === "SKIPPED") {
        continue;
    }
    console.log(`Отправка отчета по тесту: ${result}`)
};


// 1. Перебор обычного объекта через Object.entries

const config = { browser: "Chrome", headless: true, timeout: 5000 };
console.log("--- Перебор объекта ---");

for (const [key, value] of Object.entries(config)) {
    console.log(`Настройка: ${key} = ${value}`)
}

// 2. Перебор словаря Map
const envUrls = new Map<string, string>([
    ["dev", "https://dev.example.com"],
    ["prod", "https://example.com"]
])
console.log("\n--- Перебор Map ---");
for (const [env, url] of envUrls) {
    console.log(`Среда ${env} доступна по адресу ${url}`)
}