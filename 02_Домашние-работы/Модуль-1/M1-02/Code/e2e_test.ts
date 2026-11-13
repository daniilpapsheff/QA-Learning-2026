function simulateBrowserAction(actionName: string, delayMs: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[Браузер] Выполнено ${actionName}`);
            resolve();
        }, delayMs);
    });
}

async function runE2ETest() {
    console.time("E2E Test");
    await simulateBrowserAction("Открытие страницы", 500);
    await simulateBrowserAction("Ввод email", 300);
    await simulateBrowserAction("Клик по кнопке Войти", 800);
    await simulateBrowserAction("Проверка URL", 400)
    console.timeEnd("E2E Test")
}

runE2ETest();

// В реальном Playwright мы бы писали:
// await page.goto("https://example.com/login");
// await page.getByLabel("Email").fill("test@example.com");
// await page.getByRole("button", { name: "Войти" }).click();
// Но чтобы запустить это сейчас без установки браузеров, 
// мы используем функцию setTimeout, которая имитирует задержку сети и рендеринг страницы.
// setTimeout(функция, миллисекунды) — выполняет код с задержкой.
// function simulateBrowserAction(actionName: string, delayMs: number): Promise<void> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`  [Браузер] Выполнено: ${actionName}`);
//             resolve(); // Сообщаем, что действие завершено
//         }, delayMs);
//     });
// }
// async function runE2ETest() {
//     console.time("E2E Test"); // Запускаем секундомер
//     // 1. Открытие страницы (сайт грузит HTML, CSS, JS) - 500 мс
//     await simulateBrowserAction("Открытие страницы", 500);
//     // 2. Ввод email (поиск элемента в DOM, клик, ввод текста) - 300 мс
//     await simulateBrowserAction("Ввод email", 300);
//     // 3. Клик по кнопке (поиск элемента, клик, ожидание ответа сервера) - 800 мс
//     await simulateBrowserAction("Клик по кнопке Войти", 800);
//     // 4. Проверка результата (ожидание, пока загрузится новая страница) - 400 мс
//     await simulateBrowserAction("Проверка URL", 400);
//     console.timeEnd("E2E Test"); // Останавливаем секундомер
// }
// // Запускаем тест
// runE2ETest();