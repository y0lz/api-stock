const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', (ctx) => ctx.reply('✅ Вебхук работает!'));

// Важно: экспортируйте webhookCallback
module.exports = bot.webhookCallback('/api/bot');

bot.catch((err, ctx) => {
    console.error(`Ошибка для ${ctx.update.update_id}:`, err);
  });