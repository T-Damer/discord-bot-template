import dotenv from 'dotenv'

dotenv.config()

const { CLIENT_ID, GUILD_ID, DISCORD_BOT_TOKEN } =
  process.env

if (!CLIENT_ID || !GUILD_ID || !DISCORD_BOT_TOKEN) {
  throw new Error('Missing environment variable')
}

const config: Record<string, string> = {
  CLIENT_ID,
  GUILD_ID,
  DISCORD_BOT_TOKEN,
}

export default config
