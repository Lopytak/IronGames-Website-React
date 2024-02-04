import axios, { AxiosResponse } from "axios";
import { IAuthorizationUser, IGamePreview, IRegistrationUser, IToken } from "../types/server-data.interface";
import { serverRoute } from "../enums";


const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
}

export const DataService = {

    async getGamePreviews() {
        return await axios.get<IGamePreview[]>(
            import.meta.env.VITE_BASE_URL + serverRoute.game + serverRoute.gamePreviews
        )
    },

    async registerUser(userData: IRegistrationUser) {
        return await axios.post<IRegistrationUser, AxiosResponse<IToken>>(
            import.meta.env.VITE_BASE_URL + serverRoute.user + serverRoute.register, 
            userData
        )
    },
    
    async loginUser(userData: IAuthorizationUser) {
        return await axios.post<IAuthorizationUser, AxiosResponse<IToken>>(
            import.meta.env.VITE_BASE_URL + serverRoute.user + serverRoute.login, 
            userData
        )
    }, 

    async checkForAuthorization() {
        return await axios.get<IToken>(
            import.meta.env.VITE_BASE_URL + serverRoute.user + serverRoute.check, 
            { headers }
        )
    }
}