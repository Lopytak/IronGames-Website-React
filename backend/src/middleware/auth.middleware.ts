import { Request, Response, NextFunction } from 'express'
import { httpStatusCode } from '../enums.js'
import jwt from 'jsonwebtoken'
import { IRequestWithUser } from '../types/request.interface.js'
import { ITokenInfo } from '../types/user.interface.js'
import { IMessage, IToken } from '../types/response.interface.js'

const authMiddleware = (req: IRequestWithUser, res: Response<IMessage | IToken>, next: NextFunction) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(httpStatusCode.Unauthorizated401).json({
                message: 'Пользователь не авторизован'
            })
        }

        const decodedUser = <ITokenInfo>jwt.verify(token, process.env.SECRET_KEY)
        req.user = decodedUser

        next()
    } catch (e) {
        res.status(httpStatusCode.Unauthorizated401).json({
            message: 'Пользователь не авторизован'
        })
    }
}

export default authMiddleware