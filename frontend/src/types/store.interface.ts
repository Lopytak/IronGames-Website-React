import store from "../store/store"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface IUser {
    isAuth: boolean,
    id: string,
    name: string,
    surname: string,
    email: string,
    gender: string,
    role: string
}