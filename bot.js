import { acceptRequest } from './core.js'
import T from 'telegraf'
import low from 'lowdb'

const { Telegraf, session } = T

const token = '1299517227:AAHVn6y8Hy_vbqyIt3U1xz4rvveccSwfT4c'

const bot = new Telegraf(token)
    /// process.env.BOT_TOKEN)

console.log(`Starting Abstracted Bot with token: ${token}`)

bot.use(session())
bot.use(acceptRequest)

bot.hears('audio', acceptRequest)
bot.hears('message', acceptRequest)
bot.hears('document', acceptRequest)
// bot.telegram.getMe().then(acceptRequest)

bot.launch()