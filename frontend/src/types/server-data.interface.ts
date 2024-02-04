import { ISignInFields, ISignUpFields } from "./form.interface";

export interface IGamePreview {
    id: number,
    name: string,
    websiteLink: string,
    imageSrc: string
}

export interface IRegistrationUser extends Omit<ISignUpFields, 'passwordRepeat'> {}
export interface IAuthorizationUser extends ISignInFields {}

export interface IToken {
    accessToken: string
}