import { FieldError } from "react-hook-form"

export interface ISignUpFields {
    name: string,
    surname: string,
    gender: string,
    email: string,
    password: string,
    passwordRepeat: string
}

export interface ISignInFields {
    email: string,
    password: string,
}

export interface IOption {
    value: string,
    label: string
}

export interface IInputErrorName {
    errorName: FieldError | undefined
}