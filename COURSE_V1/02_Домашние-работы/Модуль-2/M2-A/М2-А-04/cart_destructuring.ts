interface CartItem {
    id: number;
    title: string;
    price: number;
    quanity: number;
    inStock: boolean;
};

const cart: CartItem[] = [
    { id: 1, title: "Ноутбук", price: 75000, quanity: 1, inStock: true },
    { id: 4, title: "Мышь", price: 1500, quanity: 4, inStock: true },
    { id: 20, title: "Коврик", price: 500, quanity: 5, inStock: false },
    { id: 3, title: "Монитор", price: 25000, quanity: 1, inStock: true }
];

function processCart({ title, price, quanity }: CartItem):string {
    return `Товар: ${title}, Итоговая стоимость: ${price * quanity} руб. `
}
cart.map((item) => console.log(processCart(item)))
