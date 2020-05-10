import Telegraf, { ContextMessageUpdate } from 'telegraf'
import { BOT_TOKEN } from './config/environments/env'
import Commands from './commands/commands'

class App {
  public bot!: Telegraf<ContextMessageUpdate>

  constructor() {
    if (!BOT_TOKEN) return

    this.bot = new Telegraf(BOT_TOKEN)
    this.BotListener()
    this.startCommands()
  }

  private BotListener(): void {
    this.bot.startPolling()
  }

  private startCommands(): void {
    new Commands(this.bot)
  }
}

export default new App()
