import Telegraf, { ContextMessageUpdate } from 'telegraf'
import { BotToken } from './config/environments/Env'
import { Messages } from './config/messages/Messages'
import { videos } from './config/videos/Videos'

class App {
  public bot!: Telegraf<ContextMessageUpdate>

  constructor() {
    if (!BotToken) return

    this.bot = new Telegraf(BotToken)
    this.BotListener()
  }

  private BotListener() {
    this.bot.startPolling()
    this.Commands()
  }

  private Commands() {
    this.bot.start((ctx: ContextMessageUpdate) => {
      if (ctx?.message) {
        const from = ctx.message.from

        if (from?.first_name) {
          ctx.reply(Messages.start(from.first_name, from.id))
        }
      }
    })

    this.bot.command('QQIssoBaianinho', (ctx: ContextMessageUpdate) => {
      const selectedVideo = videos[Math.floor(Math.random() * videos.length)]

      ctx.reply(Messages.sendVideo(selectedVideo))
    })
  }
}

export default new App()
