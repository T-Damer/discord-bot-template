import { Client, CommandInteraction, TextChannel } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Returns help ticket')
  .addStringOption((option) =>
    option
      .setName('description')
      .setDescription('Describe your problem')
      .setRequired(true)
  )

export async function execute(interaction: CommandInteraction, client: Client) {
  if (!interaction?.channelId) return

  const channel = await client.channels.fetch(interaction.channelId)
  if (!channel) return

  const thread = await (channel as TextChannel).threads.create({
    name: `support-${Date.now()}`,
    reason: `Support ticket ${Date.now()}`,
  })

  const problemDescription = interaction.options.data[0].value as string
  const { user } = interaction
  await thread.send(`**User:** <${user}> **Problem:**: ${problemDescription}`)

  // TODO: create a ticket and store it in database

  return interaction.reply({
    content: 'Help is on the way!',
    ephemeral: true,
  })
}
