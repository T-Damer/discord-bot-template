import 'module-alias/register'
import 'source-map-support/register'

import { startBot } from '@/helpers/bot'
import deployCommands from '@/helpers/deployCommands'

void (async () => {
  await deployCommands()
  console.log('Application commands successfully registered')
  await startBot()
  console.log('Bot has started')
})()
