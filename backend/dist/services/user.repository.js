import { User } from "../models/User.js";
const userRepository = {
    async getUser(req, res) {
        // const user = 0
        // res.json(user)
        return 2;
    },
    async getsUser(req, res) {
        // const user = 0
        // console.log(req.params.id)
        res.send({
            id: 18,
            tit: 'fdff'
        });
    },
    async getsUser2(req, res) {
        // const user = 0
        // console.log(req.params.id)
        if (!req.params.id)
            res.json({ id: 101, tit: 'fdfdddf' });
        else
            res.json({ id: req.params.id, tit: 'fdfdddf' });
    },
    async createUser(userData) {
        const user = User.create(userData);
        return user;
    },
    async getUserbyEmail(email) {
        const user = User.findOne({ where: { email } });
        return user;
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
};
export default userRepository;
//# sourceMappingURL=user.repository.js.map