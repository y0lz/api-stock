const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Бот успешно запущен! 🚀');
});

// Для локального тестирования (polling)
bot.launch()
  .then(() => console.log('Бот запущен в polling режиме'))
  .catch(err => console.error('Ошибка запуска:', err));

module.exports = bot.webhookCallback('/api/bot');