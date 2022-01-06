import { Client, Intents } from 'discord.js'
import { help, ping } from '@/commands/index'
import config from '@/helpers/env'

const commands = Object({ ping, help })

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
})

export async function startBot() {
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

  await client.login(config.DISCORD_BOT_TOKEN)
}
