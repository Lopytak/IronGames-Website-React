import { Response, Request } from "express"
import { IGamePreview } from "../types/game.interface.js"
import gameService from "../services/game.service.js"

const gameController = {
    async getGamePreviews(req: Request, res: Response<IGamePreview[]>) {
        const gamePreviews: IGamePreview[] = await gameService.getGamePreviews()
        res.send(gamePreviews)
    }
}

export default gameController