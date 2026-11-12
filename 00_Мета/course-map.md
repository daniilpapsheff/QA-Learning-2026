Module 0 breakdown (my recommendation):
М0-01: Что такое QA и какие есть специальности (обзор)
М0-02: Установка VS Code и настройка рабочего места
М0-03: Терминал — базовые команды (cd, ls, mkdir, pwd и т.д.)
М0-04: Установка Node.js, npm, проверка версий
М0-05: Git — установка и первый репозиторий
М0-06: GitHub — аккаунт, SSH ключи, push/pull
М0-07: Базовый технический словарь и как работать с этим курсом

Модуль 2. TypeScript 
Микромодуль	Тема	Оценка времени	Объём PDF	Вердикт
1	Синхронный vs Асинхронный код	5–6 ч	~15 стр.	✅ Ок
2	Event Loop и Promise	6–7 ч	~18 стр.	✅ Ок (тема ёмкая, но влезает)
3	fetch() и статус-коды	4–5 ч	~14 стр.	✅ Ок
4	try/catch/finally, области видимости	5–6 ч	~16 стр.	✅ Ок
5	Promise.all / allSettled / AbortSignal	5–6 ч	~15 стр.	✅ Ок
6	type vs interface, Record	4–5 ч	~14 стр.	✅ Ок
7	Классы: constructor, this, new	5–6 ч	~16 стр.	✅ Ок
8	Инкапсуляция: public/private/protected/readonly/get	4–5 ч	~14 стр.	✅ Ок
9	Наследование: extends, super()	4–5 ч	~14 стр.	✅ Ок
10	implements, полиморфизм	5–6 ч	~16 стр.	✅ Ок
11	Generics <T>	5–6 ч	~15 стр.	✅ Ок (тема абстрактная — запас времени)
12	import/export, fs, JSON	4–5 ч	~14 стр.	✅ Ок
13	.env, dotenv, ??, .gitignore	3–4 ч	~12 стр.	✅ Ок
14	ESLint + Prettier	3–4 ч	~12 стр.	✅ Ок
Итого Модуль 2 (остаток): ~62–76 часов. Это соответствует заявленным 75 ч (с учётом того, что Часть 1 уже пройдена).

Модуль 3. Веб-технологии (9 микромодулей)
Микромодуль	Тема	Оценка	PDF	Вердикт
15	Клиент-сервер, DNS, URL, CORS	4 ч	~14 стр.	✅ Ок
16	HTTP/HTTPS, 6 методов, идемпотентность	4–5 ч	~16 стр.	✅ Ок
17	Статус-коды 1xx–5xx, Headers	3–4 ч	~14 стр.	✅ Ок
18	Аутентификация vs Авторизация, Cookies	4–5 ч	~16 стр.	✅ Ок
19	JWT, Access/Refresh, OAuth 2.0	5 ч	~17 стр.	✅ Ок (тема ёмкая, но влезает)
20	DOM, Shadow DOM, iframe	4 ч	~14 стр.	✅ Ок
21	localStorage, sessionStorage, IndexedDB, storageState	4–5 ч	~15 стр.	✅ Ок
22	DevTools: Network, Application, Throttling	3–4 ч	~13 стр.	✅ Ок
23	WebSockets, GraphQL, gRPC	4–5 ч	~15 стр.	✅ Ок
Итого Модуль 3: ~35–41 часов. Реалистично: это «теоретический» модуль, кода меньше, но много схем и терминов.

Модуль 4. Playwright UI (11 микромодулей)
Микромодуль	Тема	Оценка	PDF	Вердикт
24	Установка, playwright.config.ts, флаги	4 ч	~14 стр.	✅ Ок
25	Browser → Context → Page, фикстура { page }	5 ч	~16 стр.	✅ Ок
26	Локаторы ч.1: getByRole, getByLabel и др.	5–6 ч	~18 стр.	✅ Ок
27	Локаторы ч.2: CSS, XPath, .filter(), .nth()	5–6 ч	~18 стр.	✅ Ок
28	Действия: click, fill, press, check, hover	5 ч	~16 стр.	✅ Ок
29	Auto-waiting, Web-First Assertions	5–6 ч	~17 стр.	✅ Ок (ключевая тема!)
30	waitForResponse, синхронизация UI и сети	4–5 ч	~15 стр.	✅ Ок
31	setInputFiles, download, dialog, iframe, вкладки	5–6 ч	~18 стр.	✅ Ок (много практики — ок)
32	page.route(), Mocking	4–5 ч	~15 стр.	✅ Ок
33	Visual Regression: toHaveScreenshot	4 ч	~14 стр.	✅ Ок
34	@axe-core/playwright, a11y	3–4 ч	~13 стр.	✅ Ок
Итого Модуль 4: ~50–58 часов. Самый практикоёмкий модуль — здесь много кода и мало «воды», PDF будут плотными.

Модуль 5. Паттерны (6 микромодулей)
Микромодуль	Тема	Оценка	PDF	Вердикт
35	Page Object Model	5–6 ч	~18 стр.	✅ Ок
36	Page Component, Screenplay	5 ч	~16 стр.	✅ Ок
37	beforeEach/afterEach/beforeAll/afterAll	4 ч	~14 стр.	✅ Ок
38	test.extend, фикстуры, use()	5–6 ч	~18 стр.	✅ Ок (тема сложная — запас)
39	@faker-js/faker, faker.seed()	3–4 ч	~13 стр.	✅ Ок
40	DRY, KISS, атомарность, раскладка файлов	3–4 ч	~13 стр.	✅ Ок
Итого Модуль 5: ~25–29 часов.

Модуль 6. API (7 микромодулей)
Микромодуль	Тема	Оценка	PDF	Вердикт
41	Swagger/OpenAPI, Postman	4 ч	~14 стр.	✅ Ок
42	APIRequestContext: GET/POST/PUT/DELETE	5 ч	~16 стр.	✅ Ок
43	Валидация статусов, headers, JSON, Data-Driven	5–6 ч	~17 стр.	✅ Ок
44	Zod	5 ч	~16 стр.	✅ Ок
45	Ajv, JSON Schema	4–5 ч	~15 стр.	✅ Ок
46	GraphQL: query, mutation, errors	4–5 ч	~15 стр.	✅ Ок
47	k6: VUs, duration, thresholds	4–5 ч	~15 стр.	✅ Ок
Итого Модуль 6: ~31–36 часов.

Модуль 7. Базы данных (6 микромодулей)
Микромодуль	Тема	Оценка	PDF	Вердикт
48	SELECT, WHERE, ORDER BY, LIMIT	4 ч	~14 стр.	✅ Ок
49	JOIN, LEFT JOIN, IS NULL, подзапросы	5 ч	~16 стр.	✅ Ок
50	COUNT/SUM/AVG/MIN/MAX, GROUP BY, HAVING	4 ч	~14 стр.	✅ Ок
51	INSERT, UPDATE, DELETE	3–4 ч	~13 стр.	✅ Ок
52	pg, $1, проверка БД после API	5 ч	~16 стр.	✅ Ок
53	Redis, TTL, MongoDB	4 ч	~14 стр.	✅ Ок
Итого Модуль 7: ~25–26 часов.

Модуль 8. Инфраструктура (7 микромодулей)
Микромодуль	Тема	Оценка	PDF	Вердикт
54	Git: ветки, rebase, merge-конфликты	5 ч	~17 стр.	✅ Ок
55	Allure: test.step, testInfo.attach	4–5 ч	~15 стр.	✅ Ок
56	Docker, Dockerfile, docker-compose	5–6 ч	~18 стр.	✅ Ок
57	GitHub Actions: workflow, cron, Pages	5 ч	~17 стр.	✅ Ок
58	GitLab CI: stages, variables, artifacts	4 ч	~14 стр.	✅ Ок
59	workers, sharding, flaky tests	4–5 ч	~15 стр.	✅ Ок
60	Linux: SSH, tail -f, grep, chmod	4–5 ч	~15 стр.	✅ Ок
Итого Модуль 8: ~31–35 часов.

Модуль 9. Финал (5 микромодулей)
Микромодуль	Тема	Оценка	PDF	Вердикт
61	Debugger VS Code, UI Mode, Trace Viewer	5–6 ч	~18 стр.	✅ Ок
62	AI-ассистенты: промпты, галлюцинации	4–5 ч	~15 стр.	✅ Ок
63	Code Review, Pull Request, собеседования	4 ч	~14 стр.	✅ Ок
64	Пет-проект ч.1: инициализация, конфиги, линтеры	6–8 ч	~18 стр.	✅ Ок
65	Пет-проект ч.2: UI+API тесты, Allure, CI/CD, README	8–10 ч	~20 стр.	✅ Ок
Итого Модуль 9: ~27–33 часа.

📊 Сводка по всему оставшемуся курсу
Модуль	Часы	PDF-лекций
2 (остаток)	~62–76	14
3	~35–41	9
4	~50–58	11
5	~25–29	6
6	~31–36	7
7	~25–26	6
8	~31–35	7
9	~27–33	5

# ПОЛНАЯ КАРТА КУРСА QA AUTOMATION (2026)

## МОДУЛЬ 0. Стартовая площадка (7 микромодулей)
- М0-01. Кто такой QA. Обзор. Первый терминал.
- М0-02. VS Code: установка и настройка рабочего места.
- М0-03. Терминал: глубокое погружение (копирование, перемещение, удаление).
- М0-04. Node.js и npm. Запуск первого JS-файла.
- М0-05. Git: установка, первый локальный репозиторий.
- М0-06. GitHub: аккаунт, SSH-ключи, push/pull.
- М0-07. Базовый технический словарь и дисциплина обучения.

## МОДУЛЬ 1. Фундамент тестирования и QA-архитектура (5 микромодулей)
- М1-01. SDLC, STLC, Agile, Scrum, Kanban, Shift-Left.
- М1-02. Пирамида тестирования. Виды тестирования.
- М1-03. Тест-дизайн Часть 1: Классы эквивалентности (ECP) и Граничные значения (BVA).
- М1-04. Тест-дизайн Часть 2: Таблица решений, State Transition, Pairwise.
- М1-05. Баг-репорты: Severity vs Priority, структура, жизненный цикл бага.

## МОДУЛЬ 2. TypeScript и алгоритмы (Блоки А, Б, В, Г)
*Блок А : Переменные, типы, массивы, Set/Map, циклы.*
*Блок Б. Асинхронность:*
- М2-Б-01. Синхронный vs Асинхронный код 
- М2-Б-02. Event Loop и Promise.
- М2-Б-03. fetch() и статус-коды.
- М2-Б-04. try/catch/finally, области видимости.
- М2-Б-05. Promise.all, allSettled, AbortSignal.
*Блок В. ООП и типизация:*
- М2-В-06. type vs interface, Record.
- М2-В-07. Классы: constructor, this, new.
- М2-В-08. Инкапсуляция: public, private, protected, readonly.
- М2-В-09. Наследование: extends, super().
- М2-В-10. implements, полиморфизм.
- М2-В-11. Generics <T>.
*Блок Г. Окружение и качество:*
- М2-Г-12. import/export, fs, JSON.
- М2-Г-13. .env, dotenv, ??, .gitignore.
- М2-Г-14. ESLint и Prettier.

## МОДУЛЬ 3. Веб-технологии и клиент-сервер (9 микромодулей)
- М3-15. Клиент-сервер, DNS, URL, CORS.
- М3-16. HTTP/HTTPS: методы, идемпотентность.
- М3-17. HTTP статус-коды 1xx-5xx и Headers.
- М3-18. Аутентификация vs Авторизация, Cookies.
- М3-19. JWT, Access/Refresh токены, OAuth 2.0.
- М3-20. DOM, Shadow DOM, iframe.
- М3-21. localStorage, sessionStorage, storageState.
- М3-22. DevTools: Network, Application, Throttling.
- М3-23. WebSockets, GraphQL, gRPC.

## МОДУЛЬ 4. Автоматизация UI на Playwright (11 микромодулей)
- М4-24. Установка, playwright.config.ts, флаги.
- М4-25. Архитектура Browser → Context → Page.
- М4-26. Локаторы ч.1: getByRole, getByLabel, getByTestId.
- М4-27. Локаторы ч.2: CSS, XPath, filter(), nth().
- М4-28. Действия: click, fill, press, check, hover.
- М4-29. Auto-waiting и Web-First Assertions.
- М4-30. waitForResponse: синхронизация UI и сети.
- М4-31. Файлы, диалоги, iframe, вкладки.
- М4-32. Мокинг: page.route().
- М4-33. Визуальное тестирование: toHaveScreenshot().
- М4-34. Доступность (a11y) через @axe-core/playwright.

## МОДУЛЬ 5. Паттерны тестовых фреймворков (6 микромодулей)
- М5-35. Page Object Model (POM).
- М5-36. Page Component и Screenplay.
- М5-37. Хуки жизненного цикла (beforeEach и др.).
- М5-38. Кастомные фикстуры (test.extend).
- М5-39. Генерация данных через @faker-js/faker.
- М5-40. DRY, KISS, атомарность, структура проекта.

## МОДУЛЬ 6. API и нагрузка (7 микромодулей)
- М6-41. Swagger/OpenAPI, Postman.
- М6-42. APIRequestContext (GET, POST, PUT, DELETE).
- М6-43. Валидация API-ответов. Data-Driven.
- М6-44. Zod: контрактное тестирование ч.1.
- М6-45. Ajv и JSON Schema ч.2.
- М6-46. GraphQL: query и mutation.
- М6-47. k6: нагрузочное тестирование.

## МОДУЛЬ 7. Базы данных и тестовые данные (6 микромодулей)
- М7-48. SQL: SELECT, WHERE, ORDER BY, LIMIT.
- М7-49. SQL: JOIN, IS NULL, подзапросы.
- М7-50. SQL: Агрегация, GROUP BY, HAVING.
- М7-51. SQL: INSERT, UPDATE, DELETE.
- М7-52. PostgreSQL в автотестах через pg.
- М7-53. NoSQL: Redis, TTL, MongoDB.

## МОДУЛЬ 8. Инфраструктура (7 микромодулей)
- М8-54. Git: ветки, rebase, merge-конфликты.
- М8-55. Allure Report: test.step, артефакты.
- М8-56. Docker и Docker-compose.
- М8-57. CI/CD: GitHub Actions.
- М8-58. CI/CD: GitLab CI.
- М8-59. Параллелизм (workers) и flaky-тесты.
- М8-60. Linux: SSH, tail -f, grep, chmod.

## МОДУЛЬ 9. Финал (5 микромодулей)
- М9-61. Отладка: Debugger VS Code, Trace Viewer.
- М9-62. AI-ассистенты: промпты и борьба с галлюцинациями.
- М9-63. Code Review и прохождение собеседований.
- М9-64. Пет-проект ч.1: настройка репозитория.
- М9-65. Пет-проект ч.2: тесты, CI/CD, README.