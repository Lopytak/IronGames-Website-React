import { gender } from "../enums";
import { IOption } from "../types/form.interface";

export const options: IOption[] = [
    {
        value: gender.man,
        label: 'Мужской'
    },
    {
        value: gender.woman,
        label: 'Женский'
    }
]