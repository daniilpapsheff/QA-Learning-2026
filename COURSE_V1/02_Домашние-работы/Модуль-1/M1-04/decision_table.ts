function getDiscount(isVip: boolean, amount: number): number {
    if (isVip) { return amount > 5000 ? 20 : 10 }
    if (!isVip) { return amount > 5000 ? 5 : 0 }
    return 0
}
console.log(getDiscount(true, 6000))
console.log(getDiscount(true, 4000))
console.log(getDiscount(false, 6000))
console.log(getDiscount(false, 4000))

// // --- ТЕСТЫ (по таблице решений) ---
// // Каждый тест проверяет одну колонку из нашей таблицы.
// console.log("--- Тестирование таблицы решений ---");
// // Сценарий 1: VIP и сумма > 5000 (Ожидаем 20)
// const test1 = getDiscount(true, 6000);
// console.log(`VIP, 6000 руб. -> Скидка: ${test1}% (Ожидалось 20%)`);
// // Сценарий 2: VIP и сумма <= 5000 (Ожидаем 10)
// const test2 = getDiscount(true, 3000);
// console.log(`VIP, 3000 руб. -> Скидка: ${test2}% (Ожидалось 10%)`);
// // Сценарий 3: Обычный и сумма > 5000 (Ожидаем 5)
// const test3 = getDiscount(false, 6000);
// console.log(`Обычный, 6000 руб. -> Скидка: ${test3}% (Ожидалось 5%)`);
// // Сценарий 4: Обычный и сумма <= 5000 (Ожидаем 0)
// const test4 = getDiscount(false, 3000);
// console.log(`Обычный, 3000 руб. -> Скидка: ${test4}% (Ожидалось 0%)`);