import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { help, ping } from '@/commands'
import cleanEnv from '@/helpers/env'

const commandModules = { help, ping }

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
  cleanEnv.DISCORD_BOT_TOKEN
)

rest
  .put(
    Routes.applicationGuildCommands(
      cleanEnv.CLIENT_ID,
      cleanEnv.GUILD_ID
    ),
    {
      body: commands,
    }
  )
  .then(() =>
    console.log(
      'Application commands successfully registered'
    )
  )
  .catch(console.error)
