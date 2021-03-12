require('dotenv').config()
import './config/db'
import app from './app'
import client from './config/client'
import { BOT_TOKEN, PORT } from './config/constant'
import './commands'

// express
app.listen(PORT)
console.log(`Server on http://localhost:${PORT}`)

// discord
client.on('ready', function () {
    console.log(`Logged is as ${client.user?.tag}`)
})
client.login(BOT_TOKEN)
