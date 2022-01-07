# [Discord bot template](https://discord.com/api/oauth2/authorize?client_id=928264902181789806&permissions=0&scope=bot%20applications.commands)

<a href="https://discord.com/api/oauth2/authorize?client_id=928264902181789806&permissions=0&scope=bot%20applications.commands"><img src="https://user-images.githubusercontent.com/49658988/146060134-e174115a-75f3-4b9e-922d-a76be3606b40.png" height="200px" width="200px" /></a>

---

Written with TypeScript and Discord.js library, this template will help you to create and deploy your Discord 🤖

<a href="https://discord.com/api/oauth2/authorize?client_id=928264902181789806&permissions=0&scope=bot%20applications.commands"><img src="https://user-images.githubusercontent.com/49658988/148528450-63d0f1d7-19e7-40d5-9166-e6f10b82ee39.png" width="150"/></a>

---

## How to run the bot:

1. Copy the files using `git clone https://github.com/T-Damer/discord-bot-template.git`
2. Run `yarn` to install dependencies
3. Go to [discord for developers](discordDevs) and create a new app
4. Select your app from above and go to `OAuth2 -> URL Generator`, select `bot`, `applications.commands`
5. Copy link from the bottom and paste it into your browser. Then add the bot to your server with all permissions (I recommend creating separate `text-channel`)
6. Create `.env` file in project root, use `.env.example` to fill it properly
7. Run `yarn dev` and try sending `/help` or `/ping` into your `text-channel`

## Available Scripts

- `yarn dev` — runs the app in the development mode
- `yarn start` — builds the app for production to the `build` folder and runs your app
- `yarn deploy:commands` — rebuilds commands from `commands` folder into `build` folder

## Environment variables

| Name              | Description                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| DISCORD_BOT_TOKEN | In [discord for developers](discorddevs) go to `bot` tab and click `Regenerate` button            |
| CLIENT_ID         | Get it in `General Information` tab inside [discord for developers](discorddevs)                  |
| GUILD_ID          | Enter in development mode inside **Discord** (check settings->Advanced). Use RMB to copy the data |

Consider looking into `.env.example`

---

## Deploying to Heroku

1. Create a (new) Heroku account
2. Connect Heroku account with your GitHub repo with your bot and `Deploy` the bot to Heroku
3. On Heroku dashboard go to `Resources`, disable `web` and enable `worker`

---

<a href="https://www.buymeacoffee.com/tdamer"><img src="https://img.buymeacoffee.com/button-api/?text=Support me with a coffee&emoji=☕️&slug=tdamer&button_colour=ffcc33&font_colour=000&font_family=Lato&outline_colour=000&coffee_colour=000"></a>

[discorddevs]: https://discord.com/developers
