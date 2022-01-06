import 'module-alias/register'
import 'source-map-support/register'

import { startBot } from 'helpers/bot'
void (async () => {
  await startBot()
  console.log('Bot has started')
})()
