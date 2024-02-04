import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './SignIn.module.scss'
import { ISignInFields } from '../../../types/form.interface'
import InputErrorMessage from '../../ui-elements/input-error-massage/InputErrorMessage'
import { IAuthorizationUser } from '../../../types/server-data.interface'
import { useMutation } from '@tanstack/react-query'
import { DataService } from '../../../services/DataService'
import { authorizeUser } from '../../../helpers/helpers'
import { useNavigate } from 'react-router-dom'
import { clientRoute } from '../../../enums'


const SignIn = () => {

    const navigate = useNavigate()

    const {
        register, 
        handleSubmit,
        setError, 
        // reset, 
        formState: { errors },
    } = useForm<ISignInFields>({
        mode: 'onChange'
    });

    const { mutate } = useMutation({
        mutationFn: (userData: IAuthorizationUser) => DataService.loginUser(userData),
        onError: (error) => {
            setError('email', {
                type: 'custom',
                // @ts-ignore
                message: error.response.data.message
            })
        },
        onSuccess: ({ data }) => {
            authorizeUser(data.accessToken)
            navigate(clientRoute.home)
        },
    });

    const onSubmit:SubmitHandler<ISignInFields> = formData => {
        mutate(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={ styles.form }>
            <p className={styles.form__header}>Авторизация</p>
            <label htmlFor="emailSignIn" className={styles.form__label}>Почта</label>
            <input
                { ...register('email', { 
                    required: 'Требуется ввести почту!',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Введите существующую почту'
                    } 
                })}
                type='email'
                placeholder='mail@mail.ru'
                id='emailSignIn'
                className={ errors?.email ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.email }/>
            <label htmlFor="passwordSignIn" className={styles.form__label}>Пароль</label>
            <input
                { ...register('password', { required: 'Требуется ввести пароль!' })}
                type='password'
                placeholder='Пароль'
                id='passwordSignIn'
                className={ errors?.password ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.password }/>
            <button className={styles.form__button}>Отправить</button>
        </form>
    )
}

export default SignIn
