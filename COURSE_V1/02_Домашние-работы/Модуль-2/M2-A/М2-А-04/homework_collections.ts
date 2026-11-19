// Часть А (Новый навык): «Словарь и Уникальность»
interface TestRunInfo {
    testName: string;
    status: "PASSED" | "FAILED";
    browser: string
}

const testResult: TestRunInfo[] = [{
    testName: "Тест главной страницы",
    status: "PASSED",
    browser: "Chrome"
},
{
    testName: "Тест страницы с товарами в Chrome",
    status: "PASSED",
    browser: "Chrome"
},
{
    testName: "Тест страницы с товарами в Firefox",
    status: "FAILED",
    browser: "Firefox"
},
{
    testName: "Тест страницы мой аккаунт",
    status: "FAILED",
    browser: "Chrome"
},
{
    testName: "Тест страницы спец предложения",
    status: "PASSED",
    browser: "Safari"
},
{
    testName: "Тест страницы Уведомления",
    status: "PASSED",
    browser: "Firefox"
}
];

const uniqueBrowsers: string[] = [...new Set(testResult.map((u) => (u.browser)))];
const statusMap = new Map<string, "PASSED" | "FAILED">() 
testResult.forEach((item) => statusMap.set(item.testName, item.status))

console.log(statusMap, statusMap.size)

testResult.forEach((item) => {
    return console.log(`${item.testName} в ${item.browser} завершился со статусом ${item.status}`)
});
