import GamePreview from "../models/GamePreview.js"
import { IGamePreview } from "../types/game.interface.js"

export const gameService = {
    async getGamePreviews(): Promise<IGamePreview[]> {
        const gamePreviews = GamePreview.findAll()
        return gamePreviews
    }
}

export default gameService