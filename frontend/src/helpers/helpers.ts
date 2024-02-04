import { jwtDecode } from 'jwt-decode'
import { IUser } from '../types/store.interface'
import { setUser } from '../store/user/user.slice'
import store from '../store/store'

export const authorizeUser = (accessToken: string) => {
    const decodedUser: IUser = jwtDecode(accessToken)
    localStorage.setItem('accessToken', accessToken)
    store.dispatch(setUser({
        isAuth: true,
        id: decodedUser.id,
        name: decodedUser.name,
        surname: decodedUser.surname,
        email: decodedUser.email,
        gender: decodedUser.gender,
        role: decodedUser.role
    }))
}