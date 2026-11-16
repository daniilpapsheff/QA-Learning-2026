interface TestRun {
    id: number;
    name: string;
    durationMs: number;
    status: "PASSED" | "FAILED";
};

const testSuite: TestRun[] = [
    { id: 101, name: "Проверка корзины", durationMs: 500, status: "PASSED" },
    { id: 102, name: "Применение промокода", durationMs: 800, status: "FAILED" },
    { id: 103, name: "Расчёт доставки", durationMs: 300, status: "PASSED" }
];

// --- 5. МЕТОД SOME (Есть ли ХОТЯ БЫ ОДИН элемент, подходящий под условие?) ---
const hasAnyFailures: boolean = testSuite.some((test) => test.status === "FAILED");
console.log(`Есть ли в прогоне упавшие тесты? -> ${hasAnyFailures}`);

// --- 6. МЕТОД EVERY (Подходят ли ВСЕ элементы под условие?) ---
const isBuildGreen: boolean = testSuite.every((test) => test.status === "PASSED");
console.log(`Все ли тесты зелёные (PASSED)? -> ${isBuildGreen}`);

const areAllTestsFast: boolean = testSuite.every((test) => test.durationMs < 2000);
console.log(`Все ли тесты быстрее 2000 мс? -> ${areAllTestsFast}`);

// --- 7. МЕТОД REDUCE (Свёртка массива в одно значение) ---
const totalDurationMs: number = testSuite.reduce((acc: number, currentTest: TestRun): number => {
    console.log(`[Шаг reduce] В копилке acc было: ${acc} мс | Прибавляем: 
${currentTest.durationMs} мс (${currentTest.name})`);
    return acc + currentTest.durationMs
}, 0);
console.log(`Общее время прогона всех тестов: ${totalDurationMs} мс`);

const sumOfId: number = testSuite.reduce((acc, test) => acc + test.id, 0)
console.log(sumOfId)

// --- 8. МЕТОД INCLUDES (Проверка наличия примитива в массиве) ---
const supportedBrowsers: string[] = ["chromium", "firefox", "webkit"];
console.log("\n=== 8. INCLUDES ===");
console.log(`Поддерживается ли firefox? -> ${supportedBrowsers.includes("firefox")}`);
console.log(`Поддерживается ли internet_explorer? -> ${supportedBrowsers.includes("internet_explorer")}`);