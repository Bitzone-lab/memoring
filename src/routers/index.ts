import express from 'express'
import member from './member.route'
const routers = express.Router()

// routers
routers.use('/members', member)

export default routers
