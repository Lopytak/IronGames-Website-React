import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { IGamePreview } from "../types/game.interface.js";


const GamePreview = sequelize.define<IGamePreview>('gamePreviews', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        imageSrc: { type: DataTypes.STRING, allowNull: false },
        websiteLink: { type: DataTypes.STRING, allowNull: false }
    },
    {
        timestamps: false
    }
);

export default GamePreview