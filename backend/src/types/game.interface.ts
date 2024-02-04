import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize"

export interface IGamePreview extends Model<InferAttributes<IGamePreview>, InferCreationAttributes<IGamePreview>> {
    id: CreationOptional<number>,
    name: string,
    imageSrc: string,
    websiteLink: string,
}