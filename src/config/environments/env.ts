import dotenv from 'dotenv'
dotenv.config()

export const BotToken = process.env.BOT_TOKEN || ''
export const youtubeApiToken = process.env.YT_API_TOKEN || ''
