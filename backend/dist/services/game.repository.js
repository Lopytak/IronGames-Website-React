import GamePreview from "../models/GamePreview.js";
export const gameRepository = {
    async getGamePreviews() {
        const gamePreviews = GamePreview.findAll();
        return gamePreviews;
    }
};
export default gameRepository;
//# sourceMappingURL=game.repository.js.map