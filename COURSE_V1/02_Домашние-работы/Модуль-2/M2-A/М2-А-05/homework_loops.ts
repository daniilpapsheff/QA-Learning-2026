// Часть А (Поиск и остановка)
const orders = [
    { id: 20, status: "REFUNDED", amount: 5000 },
    { id: 22, status: "DRAFT", amount: 5000 },
    { id: 38, status: "FAILED", amount: 5000 },
    { id: 42, status: "CANCELLED", amount: 5000 },
    { id: 4225, status: "REFUNDED", amount: 5000 },
];

for (const order of orders) {
    if (order.status === "DRAFT") {
        continue
    } else if (order.status === "CANCELLED") {
        console.log(`Заказ отменен ИД заказа ${order.id}`)
        break
    } else {
        console.log(`Обработан заказ #${order.id}`)
    }
}

// Часть Б (Коллекции)
console.log("\nЧасть Б")
const testMaps = new Map<string, string>()

testMaps.set("Тест страницы Уведомления", "PASS");
testMaps.set("Тест страницы спец предложения", "PASS");
testMaps.set("Тест страницы мой аккаунт", "FAIL");
testMaps.set("Тест главной страницы", "FAIL");

for (const [testName, result] of testMaps) {
    console.log(`Резульат ${testName} - "${result}"`)
};