// Подключаем библиотеку для Telegram бота
const { Telegraf } = require('telegraf');

// Инициализируем бота
const bot = new Telegraf(process.env.BOT_TOKEN);

// Обработчик команды /start
bot.command('start', (ctx) => {
  ctx.reply('Привет! Я бот на Vercel 🚀');
});

// Включаем вебхук для Vercel
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body, res);
  } else {
    res.status(200).json({ status: 'OK' });
  }
};