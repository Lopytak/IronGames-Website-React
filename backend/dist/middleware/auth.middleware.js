import { httpStatusCode } from '../enums.js';
import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(httpStatusCode.Unauthorizated401).json({
                message: 'Пользователь не авторизован'
            });
        }
        const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decodedUser;
        next();
    }
    catch (e) {
        res.status(httpStatusCode.Unauthorizated401).json({
            message: 'Пользователь не авторизован'
        });
    }
};
export default authMiddleware;
//# sourceMappingURL=auth.middleware.js.map