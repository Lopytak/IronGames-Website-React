import { httpStatusCode } from "../enums.js";
import { User } from "../models/Models.js";
class UserController {
    async getUser(req, res) {
        // const user = 0
        // res.json(user)
        return 2;
    }
    async getsUser(req, res) {
        // const user = 0
        // console.log(req.params.id)
        res.send({
            id: 18,
            tit: 'fdff'
        });
    }
    async getsUser2(req, res) {
        // const user = 0
        // console.log(req.params.id)
        if (!req.params.id)
            res.json({ id: 101, tit: 'fdfdddf' });
        else
            res.json({ id: req.params.id, tit: 'fdfdddf' });
    }
    async loginUser(req, res) {
        // const user = 0
        // res.json(user)
    }
    async registerUser(req, res) {
        const userData = req.body;
        const isEmailExist = await new UserController().findEmail(userData.email);
        if (!isEmailExist) {
            const user = await User.create(userData);
            res.sendStatus(httpStatusCode.Created201).send(user);
        }
        else {
            res.status(httpStatusCode.BadRequest400).send('Current email exist in database');
        }
    }
    async findEmail(email) {
        const foundEmail = await User.findOne({ where: { email } });
        return foundEmail ? true : false;
    }
}
export default new UserController;
//# sourceMappingURL=user.controller.js.map