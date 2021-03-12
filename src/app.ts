import express, { Request, Response } from 'express'
import routers from './routers'
const root = express.Router()
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

root.get('/', function (req: Request, res: Response) {
    res.json('Welcome')
})
app.use(root)
app.use('/api', routers)

export default app
