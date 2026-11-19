interface TestResult {
    id: number;
    name: string;
    durationMs: number
    status: "PASSED" | "FAILED"
}

const results: TestResult[] = [
    { id: 1, name: "Авторизация валидным юзером", durationMs: 450, status: "PASSED" 
},
    { id: 2, name: "Выход из системы (Logout)", durationMs: 1200, status: "FAILED" 
},
    { id: 3, name: "Редактирование профиля", durationMs: 320, status: "PASSED" },
    { id: 4, name: "Оплата картой со скидкой", durationMs: 2500, status: "FAILED" }
];

const formattedNames: string[] = results.map((test: TestResult): string => {
    return `Тест No${test.id}: ${test.name} (${test.durationMs} мс)`
})
console.log(formattedNames)

const failedTests: TestResult[] = results.filter((test) => test.status === "FAILED");

console.log("\n", failedTests);
console.log(`Длина оригинала results: ${results.length}, длина failedTests: ${failedTests.length}`);

const targetTest: TestResult | undefined = results.find((test) => test.id === 3);
console.log("Найденный тест с id 3:", targetTest);

const missingTest: TestResult | undefined = results.find((test) => test.id === 999)
console.log("Поиск несуществующего id 999:", missingTest);

const failedTestNames: string[] = results
    .filter((test) => test.status === "FAILED")
    .map((test) => test.name);

console.log(failedTestNames);