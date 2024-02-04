import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser, RootState } from "../../types/store.interface"


const initialState: IUser = {
    isAuth: false,
    id: '',
    name: '',
    surname: '',
    email: '',
    gender: '',
    role: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<IUser>) => {
            return payload
        },
        resetUser: (state) => {
            return initialState
        }
    }
})



export const { setUser, resetUser } = userSlice.actions

export const selectAuth = (state: RootState) => state.user.isAuth

export default userSlice.reducer