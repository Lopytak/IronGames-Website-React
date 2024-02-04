import GamePreview from "../models/GamePreview.js";
export const gameService = {
    async getGamePreviews() {
        const gamePreviews = GamePreview.findAll();
        return gamePreviews;
    }
};
export default gameService;
//# sourceMappingURL=game.service.js.map