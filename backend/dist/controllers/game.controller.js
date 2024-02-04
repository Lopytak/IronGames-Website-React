import gameService from "../services/game.service.js";
const gameController = {
    async getGamePreviews(req, res) {
        const gamePreviews = await gameService.getGamePreviews();
        res.send(gamePreviews);
    }
};
export default gameController;
//# sourceMappingURL=game.controller.js.map