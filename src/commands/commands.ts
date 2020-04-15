import Telegraf, { ContextMessageUpdate } from 'telegraf'

import { Messages } from '../config/messages/messages'
import { videos } from '../config/videos/videos'

class Commands {
  private bot: Telegraf<ContextMessageUpdate>

  constructor(bot: Telegraf<ContextMessageUpdate>) {
    this.bot = bot

    this.start()
    this.QQIssoBaianinho()
  }

  private start(): void {
    this.bot.start((ctx: ContextMessageUpdate) => {
      if (ctx?.message) {
        const { from } = ctx.message

        if (from?.first_name)
          ctx.reply(Messages.start(from.first_name, from.id))
      }
    })
  }

  private QQIssoBaianinho(): void {
    this.bot.command('QQIssoBaianinho', (ctx: ContextMessageUpdate) => {
      const selectedVideo = videos[Math.floor(Math.random() * videos.length)]

      ctx.reply(Messages.sendVideo(selectedVideo))
    })
  }
}

export default Commands
