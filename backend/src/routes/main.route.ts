import userRouter from './user.route.js';
import gameRouter from './game.route.js';
import express from 'express'

const router = express.Router()

router.use('/user', userRouter)
router.use('/game', gameRouter)

export default router