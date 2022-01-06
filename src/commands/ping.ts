import { CommandInteraction } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with pong')

export function execute(interaction: CommandInteraction) {
  return interaction.reply('Pong!')
}
