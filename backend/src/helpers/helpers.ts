import jwt from 'jsonwebtoken'
import { ITokenInfo } from '../types/user.interface.js'

export const generateJWT = ({ id, name, surname, email, gender, role }: ITokenInfo) => {
    const accessToken = jwt.sign(
        {
            id,
            name,
            surname,
            email,
            gender,
            role
        }, 
        process.env.SECRET_KEY,
        {
            expiresIn: '180d'
        }            
    )
    return accessToken
}