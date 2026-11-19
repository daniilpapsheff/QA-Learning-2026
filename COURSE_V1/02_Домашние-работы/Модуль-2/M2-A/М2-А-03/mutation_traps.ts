const originalPrices: number[] = [1500, 300, 4200, 900];

const sortedPrices: number[] = [...originalPrices].sort((a, b) => a - b);

console.log("=== 1. БЕЗОПАСНАЯ СОРТИРОВКА ===");
console.log("Оригинальный порядок цен (не сломан!):", originalPrices); 
console.log("Отсортированная копия цен:", sortedPrices);

// --- ЛОВУШКА 2: ПОВЕРХНОСТНАЯ КОПИЯ (SHALLOW COPY) В FILTER И MAP ---
interface User {
    name: string;
    isVip: boolean;
}
const users: User[] = [
    { name: "Даниил", isVip: true },
    { name: "Иван", isVip: false }
];

const vipUsers: User[] = users.filter((item) => item.isVip === true);
const downgradedUsers: User[] = users.map((u) => { return { ...u, isVip: false } })

console.log("\n=== 2. ЗАЩИТА ОБЪЕКТОВ ВНУТРИ МАССИВА ===");
console.log("Оригинальный массив users (Даниил всё ещё VIP):", users);
console.log("Новый массив downgradedUsers (все не VIP):", downgradedUsers);