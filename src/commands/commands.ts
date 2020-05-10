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
    this.bot.start((ctx: ContextMessageUpdate) => ctx.reply(messages.start))
  }

  private VemBaianinho(): void {
    this.bot.command('VemBaianinho', async (ctx: ContextMessageUpdate) => {
      const selectedVideo = await YouTubeService.getChannelVideos()
      ctx.reply(messages.sendVideo(selectedVideo.id.videoId), { reply_to_message_id: ctx.message?.message_id })
    })
  }
}

export default Commands
