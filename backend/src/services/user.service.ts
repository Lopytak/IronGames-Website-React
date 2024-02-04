import { User } from "../models/User.js"
import { IUser } from "../types/user.interface.js"

const userService = {

    async createUser(userData): Promise<IUser> {
        const user = User.create(userData)
        return user
    },

    async getUserbyEmail(email: string): Promise<IUser> {
        const user = User.findOne({ where: { email } })
        return user
    }
}

export default userService