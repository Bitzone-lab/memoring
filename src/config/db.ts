import mongoose from 'mongoose'
import { MONGODB_URI } from './constant'

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('db is connected')
    })
    .catch((err) => {
        console.log(err)
    })
