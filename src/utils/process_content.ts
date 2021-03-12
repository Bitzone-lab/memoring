import { Message } from 'discord.js'
import { PREFIX } from '../config/constant'

export interface ProcessContentData {
    command: string
    args: string[]
    prefix: string
}

export default function process_content(message: Message): ProcessContentData | null {
    if (message.author.bot) return null
    if (!message.content.startsWith(PREFIX)) return null

    const commandBody = message.content.slice(PREFIX.length)
    const args = commandBody.split(' ')
    const command = args.shift()?.toLowerCase() || ''

    return {
        command,
        args,
        prefix: PREFIX
    }
}
