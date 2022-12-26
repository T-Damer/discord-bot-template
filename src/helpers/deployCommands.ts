import { Routes } from 'discord-api-types/v9'
import * as commandModules from '@/commands/index'
import { REST } from '@discordjs/rest'
import cleanEnv from '@/helpers/env'

type Command = {
  data: unknown
}

export default async function deployCommands() {
  const commands: unknown[] = []

  for (const module of Object.values<Command>(commandModules))
    commands.push(module.data)

  const rest = new REST({ version: '9' }).setToken(cleanEnv.DISCORD_BOT_TOKEN)

  try {
    await rest.put(
      Routes.applicationGuildCommands(cleanEnv.CLIENT_ID, cleanEnv.GUILD_ID),
      { body: commands }
    )
  } catch (error) {
    console.error(error)
  }
}
