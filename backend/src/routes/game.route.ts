import express from 'express'
import gameController from '../controllers/game.controller.js'

const router = express.Router()

router.get('/previews', gameController.getGamePreviews)

export default router