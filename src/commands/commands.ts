import Telegraf, { ContextMessageUpdate } from 'telegraf'

import { messages } from '../config/messages/messages'
import YouTubeService from '../services/YouTube.service'

class Commands {
  private bot: Telegraf<ContextMessageUpdate>

  constructor(bot: Telegraf<ContextMessageUpdate>) {
    this.bot = bot

    this.start()
    this.VemBaianinho()
  }

  private start(): void {
    this.bot.start((ctx: ContextMessageUpdate) => {
      if (ctx?.message) {
        const { from } = ctx.message

        if (from?.first_name)
          ctx.reply(messages.start)
      }
    })
  }

  private VemBaianinho(): void {
    this.bot.command('VemBaianinho', async (ctx: ContextMessageUpdate) => {
      const videos =  (await YouTubeService.getChannelVideos()).items
      const selectedVideo = videos[Math.floor(Math.random() * videos.length)]

      ctx.reply(messages.sendVideo(selectedVideo.id.videoId))
    })
  }
}

export default Commands
