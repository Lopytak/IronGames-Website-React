import jwt from 'jsonwebtoken';
export const generateJWT = ({ id, name, surname, email, gender, role }) => {
    const accessToken = jwt.sign({
        id,
        name,
        surname,
        email,
        gender,
        role
    }, process.env.SECRET_KEY, {
        expiresIn: '180d'
    });
    return accessToken;
};
//# sourceMappingURL=helpers.js.map