import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './SignUp.module.scss'
import { IOption, ISignUpFields } from '../../../types/form.interface';
import Select from 'react-select';
import InputErrorMessage from '../../ui-elements/input-error-massage/InputErrorMessage';
import { IRegistrationUser } from '../../../types/server-data.interface';
import { useMutation } from '@tanstack/react-query';
import { DataService } from '../../../services/DataService';
import { options } from '../../../data/formOptions';
import { authorizeUser } from '../../../helpers/helpers';
import { useNavigate } from 'react-router-dom';
import { clientRoute } from '../../../enums';
import { useAppSelector } from '../../../hooks/hooks';


const SignUp = () => {

    const user = useAppSelector(state => state.user)
    const navigate = useNavigate()

    const {
        register, 
        handleSubmit,
        watch,
        setError,
        // reset, 
        formState: { errors },
        control
    } = useForm<ISignUpFields>({
        mode: 'onChange'
    });

    const { mutate } = useMutation({
        mutationFn: (userData: IRegistrationUser) => DataService.registerUser(userData),
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

    const onSubmit:SubmitHandler<ISignUpFields> = formData => {
        const userData: IRegistrationUser = {
            name: formData.name,
            surname: formData.surname,
            gender: formData.gender,
            email: formData.email,
            password: formData.password
        }
        
        mutate(userData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={ styles.form }>
            <p className={styles.form__header}>Создание аккаунта</p>
            <label htmlFor="nameSignUp" className={styles.form__label}>Имя</label>
            <input 
                { ...register('name', { 
                    required: 'Требуется ввести имя!', 
                    pattern: {
                        value: /^([А-Я]{1}[а-яё]{1,12}|[A-Z]{1}[a-z]{1,15})$/,
                        message: "Введите корректное имя!"
                    }
                })}
                type='text'
                placeholder='Имя'
                id='nameSignUp'
                className={ errors?.name ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.name }/>
            <label htmlFor="nameSignUp" className={styles.form__label}>Фамилия</label>
            <input
                { ...register('surname', { 
                    required: 'Требуется ввести фамилию!',
                    pattern: {
                        value: /^([А-Я]{1}[а-яё]{1,12}|[A-Z]{1}[a-z]{1,15})$/,
                        message: "Введите корректную фамилию!"
                    }
                })}
                type='text'
                placeholder='Фамилия'
                id='surnameSignUp'
                className={ errors?.surname ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.surname }/>
            <label htmlFor="nameSignUp" className={styles.form__label}>Пол</label>
            <Controller 
                control={ control }
                name='gender'
                rules={{ 
                    required: 'Требуется выбрать пол!'
                }}
                render={({field: { onChange }, fieldState: { error }}) => (
                    <div>
                        <div>
                            <Select
                                options={options}
                                className={styles.form__select}
                                onChange={newValue => onChange((newValue as IOption).value) }
                                placeholder='Пол'
                                id='genderSignUp'
                            />
                        </div>
                        <InputErrorMessage errorName={ error }/>
                    </div>
                )}
            />
            <label htmlFor="emailSignUp" className={styles.form__label}>Почта</label>
            <input
                { ...register('email', { 
                    required: 'Требуется ввести почту!',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Введите корректную почту!"
                    }
                })}
                type='email'
                placeholder='mail@mail.ru'
                id='emailSignUp'
                className={ errors?.email ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.email }/>
            <label htmlFor="passwordSignUp" className={styles.form__label}>Пароль</label>
            <input
                { ...register('password', { 
                    required: 'Требуется ввести пароль!',
                    pattern: {
                        value: /([A-z]|[0-9])/,
                        message: 'Допускаются только цифры и латинские буквы!'
                    },
                    minLength: {
                        value: 6,
                        message: 'Используйте не менее 6-ти символов'
                    }
                })}
                type='password'
                placeholder='Пароль'
                id='passwordSignUp'
                className={ errors?.password ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.password }/>
            <label htmlFor="passswordRepeatSignUp" className={styles.form__label}>Повтор пароля</label>
            <input
                { ...register('passwordRepeat', { 
                    required: 'Требуется ввести повтор пароля!',
                    pattern: {
                        value: /([A-z]|[0-9])/,
                        message: 'Допускаются только цифры и латинские буквы!'
                    },
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return 'Пароль и повтор пароля не сходятся!'
                        }
                    } 
                })}
                type='password' 
                placeholder='Повтор пароля'
                id='passswordRepeatSignUp'
                className={ errors?.passwordRepeat ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.passwordRepeat }/>
            <button className={styles.form__button}>Отправить</button>
        </form>
    )
}

export default SignUp