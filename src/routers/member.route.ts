import express, { Request, Response } from 'express'
import Member from '../models/Member'

const route = express.Router()

route.get('/', async function (req: Request, res: Response) {
    const members = await Member.find()
    res.json(members)
})

export default route
