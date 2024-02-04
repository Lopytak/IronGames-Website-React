var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DataTypes, Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';
// export const User = sequelize.define('user', {
//         id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//         name: { type: DataTypes.STRING },
//         surname: { type: DataTypes.STRING },
//         gender: { type: DataTypes.STRING },
//         email: { type: DataTypes.STRING, unique: true },
//         password: { type: DataTypes.STRING },
//         role: { type: DataTypes.STRING, defaultValue: 'USER' },
//     }
// );
let GamePreview = class GamePreview extends Model {
};
__decorate([
    Column({
        type: DataTypes.STRING,
        allowNull: false
    }),
    __metadata("design:type", Number)
], GamePreview.prototype, "id", void 0);
__decorate([
    Column({
        type: DataTypes.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], GamePreview.prototype, "name", void 0);
__decorate([
    Column({
        type: DataTypes.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], GamePreview.prototype, "imageSrc", void 0);
__decorate([
    Column({
        type: DataTypes.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], GamePreview.prototype, "websiteLink", void 0);
GamePreview = __decorate([
    Table({
        timestamps: false,
        tableName: 'gamePreviews',
        modelName: 'GamePreview'
    })
], GamePreview);
export { GamePreview };
// export const GamePreview: ModelCtor<Model<any, any>> = sequelize.define('gamePreview', {
//         id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//         name: { type: DataTypes.STRING, allowNull: false },
//         imageSrc: { type: DataTypes.STRING, allowNull: false },
//         websiteLink: { type: DataTypes.STRING, allowNull: false }
//     },
//     {
//         timestamps: false
//     }
// );
// d
// const Score = sequelize.define('score', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     hp: { type: DataTypes.INTEGER, },
//     coins: { type: DataTypes.INTEGER },
//     enemies: { type: DataTypes.INTEGER, },
//     completion: { type: DataTypes.STRING, },
// });
// User.hasOne(Score);
// Score.belongsTo(User);
// module.exports = {
//     User, Score
// }
//# sourceMappingURL=Models.js.map