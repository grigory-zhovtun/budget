import { Telegraf } from "telegraf";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

import { privateKey, spreadsheetId, API_KEY, email } from "./credentials.js";
import {
  KEYBOARDS,
  KEY_CHILDREN,
  KEY_HOME,
  KEY_CELEBRATION,
  KEY_MONTHLY,
  KEY_HEALTH,
  KEY_DIFFERENT,
  KEY_RELAX,
  KEY_TRANSPORT,
  KEY_TRIP,
  KEY_PROFIT,
  PAY_METHOD,
  subcategory,
} from "./keyboards.js";

const serviceAccountAuth = new JWT({
  email: email,
  key: privateKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function start() {
  const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  const bot = new Telegraf(API_KEY);

  bot.start((ctx) => ctx.reply("Выбери раздел:", KEYBOARDS));

  let currentCategory = "";
  let currentName = "";

  bot.on("callback_query", async (ctx) => {
    const data = ctx.callbackQuery.data;
    switch (data) {
      case "home":
        currentCategory = "ДОМ";
        ctx.editMessageText("Выбери раздел:", KEY_HOME);
        break;
      case "children":
        currentCategory = "ДЕТИ";
        ctx.editMessageText("Выбери раздел:", KEY_CHILDREN);
        break;
      case "celebration":
        currentCategory = "ПРАЗДНИКИ";
        ctx.editMessageText("Выбери раздел:", KEY_CELEBRATION);
        break;
      case "monthly":
        currentCategory = "ЕЖЕМЕСЯЧНЫЕ";
        ctx.editMessageText("Выбери раздел:", KEY_MONTHLY);
        break;
      case "different":
        currentCategory = "РАЗНОЕ";
        ctx.editMessageText("Выбери раздел:", KEY_DIFFERENT);
        break;
      case "health":
        currentCategory = "ЗДОРОВЬЕ";
        ctx.editMessageText("Выбери раздел:", KEY_HEALTH);
        break;
      case "relax":
        currentCategory = "ОТДЫХ";
        ctx.editMessageText("Выбери раздел:", KEY_RELAX);
        break;
      case "transport":
        currentCategory = "ТРАНСПОРТ";
        ctx.editMessageText("Выбери раздел:", KEY_TRANSPORT);
        break;
      case "trip":
        currentCategory = "ПУТЕШЕСТВИЯ";
        ctx.editMessageText("Выбери раздел:", KEY_TRIP);
        break;
      case "profit":
        currentCategory = "ДОХОДЫ";
        ctx.editMessageText("Выбери раздел:", KEY_PROFIT);
        break;
      case "back":
        currentCategory = "";
        ctx.editMessageText("Выбери раздел:", KEYBOARDS);
        break;
      default:
        // handle button press in subcategory
        if (currentCategory) {
          currentName = subcategory[data];
          ctx.reply("ВНЕСИТЕ СУММУ И ЕСЛИ НАДО, КОММЕНТАРИЙ (ЧЕРЕЗ ПРОБЕЛ):");
          bot.on("text", async (ctx) => {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleDateString("ru-RU", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            });
            const textParts = ctx.message.text.split(" ");
            const amount = textParts[0];
            const comment =
              textParts.length > 1 ? textParts.slice(1).join(" ") : "";

            const rows = await sheet.getRows();
            const lastRowIndex = rows.length + 1;
            const balanceFormula = `=SUMIFS(D$2:D${lastRowIndex + 1}, B$2:B${lastRowIndex + 1}, "ДОХОДЫ", A$2:A${lastRowIndex + 1}, "<="&A${lastRowIndex + 1}) - SUMIFS(D$2:D${lastRowIndex + 1}, B$2:B${lastRowIndex + 1}, "<>ДОХОДЫ", A$2:A${lastRowIndex + 1}, "<="&A${lastRowIndex + 1})`;
            await sheet.addRow({
              Дата: formattedDate,
              Категория: currentCategory,
              Название: currentName,
              Сумма: amount,
              Баланс: balanceFormula,
              Комментарий: comment,
            });

            await ctx.deleteMessage();
            await ctx.reply("Выбери раздел:", KEYBOARDS);
          });

          break;
        }
    }
  });

  bot.launch();
}

start();
