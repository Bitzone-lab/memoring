import { Message } from 'discord.js'
import Member from '../models/Member'

export default async function send(message: Message, args: string[]) {
    const member = new Member({
        name: args.join(' ')
    })

    const member_saved = await member.save()
    message.channel.send(`Welcome ${member_saved.name}`)
}
