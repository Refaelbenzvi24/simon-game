import express from 'express'
import gameRoute from './game.route'

const router = express.Router()

router.get('/status', (req, res) => res.send('OK'))

router.use("/game", gameRoute)

export default router
