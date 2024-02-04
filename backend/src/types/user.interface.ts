import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { gender, role } from "../enums.js";
import { JwtPayload } from "jsonwebtoken";

export interface IUserRegistration {
    id: number,
    name: string,
    surname: string,
    gender: gender.man | gender.woman, 
    email: string, 
    password: string
}

export interface IUserAuthorization {
    email: string, 
    password: string
}

export interface IUser extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
    id: CreationOptional<number>,
    name: string,
    surname: string,
    gender: gender.man | gender.woman, 
    email: string, 
    password: string,
    role: role.user | role.admin
}

export interface ITokenInfo extends JwtPayload { 
    id: number,
    name: string,
    surname: string,
    email: string,
    gender: gender.man | gender.woman,
    role: role.user | role.admin
}