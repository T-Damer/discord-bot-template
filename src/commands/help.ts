import { SlashCommandBuilder } from '@discordjs/builders'
import {
  CommandInteraction,
  Client,
  TextChannel,
} from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Returns help ticket')
  .addStringOption((option) =>
    option
      .setName('deiscription')
      .setDescription('Describe your problem')
      .setRequired(true)
  )

export async function execute(
  interaction: CommandInteraction,
  client: Client
) {
  if (!interaction?.channelId) {
    return
  }
  const channel = await client.channels.fetch(
    interaction.channelId
  )
  if (!channel || channel.type !== 'GUILD_TEXT') {
    return
  }
  const thread = await (
    channel as TextChannel
  ).threads.create({
    name: `support-${Date.now()}`,
    reason: `Support ticket ${Date.now()}`,
  })

  const problemDescription =
    interaction.options.getString('description')! // The description is required field
  const { user } = interaction
  thread.send(`**User:** <@${user}>
  **Problem:**: ${problemDescription}`)

  // TODO: create a ticket and store it in database

  return interaction.reply({
    content: 'Help is on the way!',
    ephemeral: true,
  })
}
