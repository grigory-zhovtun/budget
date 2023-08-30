import { Markup } from "telegraf";

export const KEYBOARDS = Markup.inlineKeyboard([
    [
        Markup.button.callback("🏠 ДОМ", "home"),
        Markup.button.callback("🧡 ДЕТИ", "children"),
        Markup.button.callback("🍰 ПРАЗДНИК", "celebration"),
    ],
    [
        Markup.button.callback("🌙 ЕЖЕМЕСЯЧНО", "monthly"),
        Markup.button.callback("💪 ЗДОРОВЬЕ", "health"),
        Markup.button.callback("🔀 РАЗНОЕ", "different"),
    ],
    [
        Markup.button.callback("🎷 ОТДЫХ", "relax"),
        Markup.button.callback("🚗 ТРАНСПОРТ", "transport"),
        Markup.button.callback("🧳 ПОЕЗДКИ", "trip"),
    ],
    [
        Markup.button.callback("💰 ДОХОДЫ", "profit"),
    ],
]);

export const KEY_CHILDREN = Markup.inlineKeyboard([
    [Markup.button.callback("✅ детский сад", "kindergarten")],
    [
        Markup.button.callback("✅ игрушки", "toys"),
        Markup.button.callback("✅ питание", "children_food"),
    ],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const KEY_HOME = Markup.inlineKeyboard([
    [
        Markup.button.callback("✅ продукты", "food"),
        Markup.button.callback("⚡ свет", "light"),
    ],
    [
        Markup.button.callback("✅ квартплата", "rent"),
        Markup.button.callback("✅ коммуналка", "communal_payments"),
    ],
    [
        Markup.button.callback("✅ инвентарь", "inventory"),
        Markup.button.callback("✅ одежда", "clothes"),
    ],
    [
        Markup.button.callback("✅ обувь", "footwear"),
        Markup.button.callback("✅ интернет", "internet"),
    ],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const KEY_MONTHLY = Markup.inlineKeyboard([
    [Markup.button.callback("✅ курсы", "courses")],
    [
        Markup.button.callback("✅ телефон", "phone"),
        Markup.button.callback("✅ парикмахер", "hairdresser"),
    ],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const KEY_HEALTH = Markup.inlineKeyboard([
    [Markup.button.callback("✅ аптека", "pharmacy")],
    [Markup.button.callback("✅ доктор", "doctor")],
    [Markup.button.callback("❌ НАЗАД", "back")],
])

export const KEY_RELAX = Markup.inlineKeyboard([
    [Markup.button.callback("✅ кино", "cinema")],
    [Markup.button.callback("✅ кафе", "cafe")],
    [Markup.button.callback("✅ развлечение", "entertainment")],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const KEY_DIFFERENT = Markup.inlineKeyboard([
    [Markup.button.callback("✅ неучтенка", "unaccounted")],
    [Markup.button.callback("✅ долг", "credit")],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const KEY_TRANSPORT = Markup.inlineKeyboard([
    [
        Markup.button.callback("✅ метро", "metro"),
        Markup.button.callback("✅ бензин", "petrol"),
    ],
    [
        Markup.button.callback("✅ маршрутка", "minibus"),
        Markup.button.callback("✅ автобус", "bus"),
    ],
    [
        Markup.button.callback("✅ автомобиль", "car"),
        Markup.button.callback("✅ такси", "taxi"),
    ],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const KEY_PROFIT = Markup.inlineKeyboard([
    [
        Markup.button.callback("✅ зарплата", "salary"),
        Markup.button.callback("✅ аванс", "prepaid"),
    ],
    [
        Markup.button.callback("✅ отпускные", "vacation_pay"),
        Markup.button.callback("✅ нач остаток", "initial_balance"),
    ],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const KEY_CELEBRATION = Markup.inlineKeyboard([
    [
        Markup.button.callback("✅ день рождения", "birzday"),
        Markup.button.callback("✅ сезонный", "season"),
    ],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const KEY_TRIP = Markup.inlineKeyboard([
    [
        Markup.button.callback("✅ междугородние", "intercity"),
        Markup.button.callback("✅ путешествие", "travel"),
    ],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const PAY_METHOD = Markup.inlineKeyboard([
    [
        Markup.button.callback("💳 карта", "card"),
        Markup.button.callback("💵 наличные", "cash"),
    ],
    [Markup.button.callback("❌ НАЗАД", "back")],
]);

export const subcategory = {
    kindergarten: "детский сад",
    toys: "игрушки",
    children_food: "питание",
    food: "продукты",
    light: "свет",
    rent: "квартплата",
    communal_payments: "коммуналка",
    inventory: "инвентарь",
    clothes: "одежда",
    footwear: "обувь",
    internet: "интернет",
    courses: "курсы",
    phone: "телефон",
    hairdresser: "парикмахер",
    pharmacy: "аптека",
    doctor: "доктор",
    cinema: "кино",
    cafe: "кафе",
    entertainment: "развлечение",
    unaccounted: "неучтенка",
    credit: "долг",
    metro: "метро",
    petrol: "бензин",
    minibus: "маршрутка",
    bus: "автобус",
    car: "автомобиль",
    taxi: "такси",
    salary: "зарплата",
    prepaid: "аванс",
    vacation_pay: "отпускные",
    initial_balance: "нач остаток",
    birzday: "день рождения",
    season: "сезонный",
    intercity: "междугородние",
    travel: "путешествие"
};
