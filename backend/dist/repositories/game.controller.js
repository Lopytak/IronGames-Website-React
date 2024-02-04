import { GamePreview } from "../models/Models.js";
class GameController {
    async getGamePreviews(req, res) {
        const gamePreviews = await GamePreview.findAll();
        res.send(gamePreviews);
    }
}
export default new GameController;
//# sourceMappingURL=game.controller.js.map