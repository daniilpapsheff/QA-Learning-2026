interface CartItem {
    id: number;
    title: string;
    price: number;
    quanity: number;
    inStock: boolean;
}

const cart: CartItem[] = [
    { id: 1, title: "Ноутбук", price: 75000, quanity: 1, inStock: true },
    { id: 4, title: "Мышь", price: 1500, quanity: 4, inStock: true },
    { id: 20, title: "Коврик", price: 500, quanity: 5, inStock: false },
    { id: 3, title: "Монитор", price: 25000, quanity: 1, inStock: true }
]

const titles: string[] = cart.map((u) => u.title);
const expensiveItems: CartItem[] = cart.filter((u) => u.price > 1000);
const mouses: CartItem | undefined = cart.find((u) => u.title === "Мышь");
console.log(`Данные карточки мыши: ${mouses}`)
const outOfStock: boolean = cart.some((u) => u.inStock === false)
console.log("Названия всех карт товаров:", titles,
    "\nЦена товаров больше 1000 рублей:", expensiveItems,
    "\nкарточка с данными товара Мышь:", mouses,
    "\nесть ли товары не в наличии:", outOfStock);

const quanityes: boolean = cart.every((u) => u.quanity >= 1);
const totalCartPrice: number = cart.reduce((acc, u) => acc + u.price * u.quanity, 0)
console.log(totalCartPrice)
const inStocks: string[] = cart
    .filter((u) => u.inStock === true && u.price > 1000)
    .map((u) => u.title);
console.log(inStocks)