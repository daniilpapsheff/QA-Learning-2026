interface UserResponse {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user"
    department?: string
};

const apiResponse: UserResponse = {
    id: 101,
    name: "Даниил",
    email: "qa@example.com",
    role: "admin"
};

const { name: userNames, role, email: userEmail, department = "QA Automation" } = apiResponse;
console.log("--- 1. Деструктуризация объекта ---");
console.log(`Имя: ${userNames}, Роль: ${role}, Почта: ${userEmail}, Отдел: 
${department}`);

// --- 2. ДЕСТРУКТУРИЗАЦИЯ В ПАРАМЕТРАХ ФУНКЦИИ (Как в Playwright) ---
function formatUserBadge({ id, name, role }: UserResponse): string {
    return `[ID: ${id}] Пользователь ${name} имеет права: ${role}`
};
console.log("\n--- 2. Деструктуризация в аргументах функции ---");
console.log(formatUserBadge(apiResponse))

// --- 3. ДЕСТРУКТУРИЗАЦИЯ МАССИВА И КОРТЕЖА ---
const coordinates: [number, number] = [55.7558, 37.6173];

const [lat, lng] = coordinates;
console.log(`Широта: ${lat}, Долгота: ${lng}`);
const [, onlyLng] = coordinates;
console.log(`Только долгота: ${onlyLng}`);