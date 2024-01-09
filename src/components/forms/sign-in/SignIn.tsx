import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './SignIn.module.scss'
import { ISignInFields } from '../../../types/form.interface';
import InputErrorMessage from '../../ui-elements/input-error-massage/InputErrorMessage';


const SignIn = () => {

    const {
        register, 
        handleSubmit, 
        reset, 
        formState: { errors },
    } = useForm<ISignInFields>({
        mode: 'onChange'
    });

    const onSubmit:SubmitHandler<ISignInFields> = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={ styles.form }>
            <p className={styles.form__header}>Авторизация</p>
            <label htmlFor="emailSignIn" className={styles.form__label}>Почта</label>
            <input
                { ...register('email', { 
                    required: 'Требуется ввести почту!',
                    pattern: {
                        value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                        message: 'Введите существующую почту!'
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