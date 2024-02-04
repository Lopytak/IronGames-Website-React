import { User } from "../models/User.js";
const userService = {
    async createUser(userData) {
        const user = User.create(userData);
        return user;
    },
    async getUserbyEmail(email) {
        const user = User.findOne({ where: { email } });
        return user;
    }
};
export default userService;
//# sourceMappingURL=user.service.js.map