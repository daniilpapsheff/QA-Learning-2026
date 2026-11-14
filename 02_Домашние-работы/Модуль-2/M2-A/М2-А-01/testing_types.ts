function checkAge(age: number): string {
    return (age < 18) ? "Доступ запрещен" : "Доступ разрешен" 
};
console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(25));
console.log(checkAge("двадцать"));
// Argument of type 'string' is not assignable to parameter of type 'number'.
// Код запустился
// $ npx tsx "C:\Users\lfyz\QA-Learnining-2026\02_Домашние-работы\Модуль-2\M2-A\М2-А-01\testing_types.ts"
// Доступ запрещен
// Доступ разрешен
// Доступ разрешен
// Доступ разрешен
// tsx блокирует все проверки инструмент просто вырезает все аннотации типов (например, : number и : string), превращает файл в обычный JavaScript и мгновенно запускает его через Node.js. Он не запускает проверку типов tsc.
// Как сработал сам JavaScript: В JS при сравнении строки "двадцать" и числа 18 ("двадцать" < 18) строка превращается в NaN (не число). Любое сравнение с NaN всегда дает false, поэтому тернарный оператор выбрал вторую ветку и вывел "Доступ разрешен".