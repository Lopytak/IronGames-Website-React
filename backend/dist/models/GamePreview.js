import { DataTypes } from "sequelize";
import sequelize from "../db.js";
const GamePreview = sequelize.define('gamePreviews', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    imageSrc: { type: DataTypes.STRING, allowNull: false },
    websiteLink: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false
});
export default GamePreview;
//# sourceMappingURL=GamePreview.js.map