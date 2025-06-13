const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Бот работает на Vercel! 🚀');
});

// Важно: только для Vercel (без bot.launch())
module.exports = bot.webhookCallback('/api/bot');

bot.catch((err, ctx) => {
    console.error(`Ошибка для ${ctx.update.update_id}:`, err);
  });