import { Client, Intents, Interaction } from 'discord.js'
import config from './config'
import * as commandModules from './commands'

const commands = Object(commandModules)

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
})

client.once('ready', (client) => {
  console.log(`Discord ${client.user.tag} is ready`)
  console.log(
    `Link to invite: https://discord.com/api/oauth2/authorize?client_id=${config.CLIENT_ID}&permissions=0&scope=bot%20applications.commands`
  )
})

client.on('interactionCreate', (interaction) => {
  if (!interaction.isCommand()) {
    return
  }
  const { commandName } = interaction
  if (commands[commandName]) {
    commands[commandName].execute(interaction, client)
  }
})

client.login(config.DISCORD_BOT_TOKEN)
