import { Schema, model, Document } from 'mongoose'

const memberShema = new Schema({
    name: String
})

export default model<Member>('member', memberShema)

interface Member extends Document {
    name: string
}
