import { Message } from 'discord.js'
import client from '../config/client'
import { ADD, SEND } from '../config/commands'
import process_content from '../utils/process_content'
import send from './send'
import add from './add'

client.on('message', function (message: Message) {
    const data = process_content(message)
    if (!data) return
    const { command, args } = data

    switch (command) {
        case SEND:
            send(message, args)
            break

        case ADD:
            add(message, args)
            break
    }
})
