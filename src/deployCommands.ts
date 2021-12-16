import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import config from './config'
import * as commandModules from './commands'

type Command = {
  data: unknown
}

const commands = []

for (const module of Object.values<Command>(
  commandModules
)) {
  commands.push(module.data)
}

const rest = new REST({ version: '9' }).setToken(
  config.DISCORD_BOT_TOKEN
)

rest
  .put(
    Routes.applicationGuildCommands(
      config.CLIENT_ID,
      config.GUILD_ID
    ),
    { body: commands }
  )
  .then(() =>
    console.log(
      'Application commands successfully registered'
    )
  )
  .catch(console.error)
