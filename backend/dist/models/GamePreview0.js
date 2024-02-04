// import sequelize from '../db.js';
// import { DataTypes, Model } from 'sequelize';
// import { IUser } from '../types/user.interface.js'
// import { Column, Table } from 'sequelize-typescript';
export {};
// // export const User = sequelize.define('user', {
// //         id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// //         name: { type: DataTypes.STRING },
// //         surname: { type: DataTypes.STRING },
// //         gender: { type: DataTypes.STRING },
// //         email: { type: DataTypes.STRING, unique: true },
// //         password: { type: DataTypes.STRING },
// //         role: { type: DataTypes.STRING, defaultValue: 'USER' },
// //     }
// // );
// @Table({
//     timestamps: false,
//     tableName: 'gamePreviews',
//     modelName: 'GamePreview'
// })
// export default class GamePreview extends Model<GamePreview> {
//     @Column({
//         type: DataTypes.STRING,
//         allowNull: false
//     })
//     id: number
//     @Column({
//         type: DataTypes.STRING,
//         allowNull: false
//     })
//     name: string
//     @Column({
//         type: DataTypes.STRING,
//         allowNull: false
//     })
//     imageSrc: string
//     @Column({
//         type: DataTypes.STRING,
//         allowNull: false
//     })
//     websiteLink: string
// }
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
//# sourceMappingURL=GamePreview0.js.map