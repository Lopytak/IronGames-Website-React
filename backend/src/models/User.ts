import sequelize from '../db.js';
import { DataTypes } from 'sequelize';
import { IUser } from '../types/user.interface.js'

export const User = sequelize.define<IUser>('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        surname: { type: DataTypes.STRING },
        gender: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING, unique: true },
        password: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING, defaultValue: 'USER' },
    }
);