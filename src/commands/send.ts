import { Message } from 'discord.js'

export default function send(message: Message, args: string[]) {
    message.reply(args.join(' '))
}
