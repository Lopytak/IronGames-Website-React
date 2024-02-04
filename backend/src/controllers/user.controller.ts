import { httpStatusCode } from "../enums.js"
import { generateJWT } from "../helpers/helpers.js"
import userService from "../services/user.service.js"
import { IRequestWithBody, IRequestWithParams, IRequestWithParamsAndBody, IRequestWithUser, IURIParamID } from "../types/request.interface.js"
import { IMessage, IToken } from "../types/response.interface.js"
import { IUser, IUserAuthorization, IUserRegistration } from "../types/user.interface.js"
import { Response, Request } from 'express'
import bcrypt from 'bcrypt'

const userController = {

    async check(req: IRequestWithUser, res: Response<IToken>) {
        const accessToken = generateJWT(req.user)
        res.json({ accessToken })
    },

    async login(req: IRequestWithBody<IUserAuthorization>, res: Response<IMessage | IToken>) {
        const userData: IUserAuthorization = req.body
    
        const foundUser: IUser = await userService.getUserbyEmail(userData.email)
    
        if (foundUser) {
            const comparePassword = bcrypt.compareSync(userData.password, foundUser.password)
            if (comparePassword) {
                const accessToken = generateJWT(foundUser)
                res.status(httpStatusCode.Ok200).json({ accessToken })
            }
            else {
                res.status(httpStatusCode.BadRequest400).json({
                    message: 'Неправильный пароль'
                })
            }
        } else {
            res.status(httpStatusCode.BadRequest400).json({
                message: 'Пользователя с такой почтой нет на сайте'
            })
        }
    },

    async registerUser(req: IRequestWithBody<IUserRegistration>, res: Response<IMessage | IToken>) {
        const userData: IUserRegistration = req.body
    
        const foundUser: IUser = await userService.getUserbyEmail(userData.email)
    
        if (!foundUser) {
            const hashPassword = await bcrypt.hash(userData.password, 5)
            const parsedUserData = {
                ...userData, 
                password: hashPassword
            }
            const user = await userService.createUser(parsedUserData)
            const accessToken = generateJWT(user)
            res.status(httpStatusCode.Created201).json({ accessToken })
        } else {
            res.status(httpStatusCode.BadRequest400).json({
                message: 'Пользователь с такой почтой уже зарегистрирован на сайте'
            })
        }
        
    }

    // async updateUser(req: IRequestWithParamsAndBody<IURIParamID, IUserData>, res: Response) {
    //     const { name, surname, gender, email, password } = req.body
    //     // console.log(name, surname, gender, email, password)
    //     res.json('ok')
    // }

    // async deleteUser(req: IRequestWithParams<IURIParamID>, res: Response) {
    //     const a = req.params.id
    //     res.send('ok')
    // }
}

export default userController