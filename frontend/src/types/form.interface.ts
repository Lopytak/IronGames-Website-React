import { FieldError } from "react-hook-form"
import { gender } from "../enums"

export interface ISignUpFields {
    name: string,
    surname: string,
    gender: gender.man | gender.woman,
    email: string,
    password: string,
    passwordRepeat: string
}

export interface ISignInFields {
    email: string,
    password: string,
}

export interface IOption {
    value: gender.man | gender.woman,
    label: string
}

export interface IInputErrorName {
    errorName: FieldError | undefined
}