import Telegraf, { ContextMessageUpdate } from 'telegraf'
import { BotToken } from './config/environments/env'
import Commands from './commands/commands'

class App {
  public bot!: Telegraf<ContextMessageUpdate>

  constructor() {
    if (!BotToken) return

    this.bot = new Telegraf(BotToken)
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
