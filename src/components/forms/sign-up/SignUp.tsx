import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './SignUp.module.scss'
import { IOption, ISignUpFields } from '../../../types/form.interface';
import Select from 'react-select';
import InputErrorMessage from '../../ui-elements/input-error-massage/InputErrorMessage';

const options: IOption[] = [
    {
        value: 'man',
        label: 'Мужской'
    },
    {
        value: 'woman',
        label: 'Женский'
    }
]

// const getValue = (value:string) => {
//     value ? options.find(option => option.value === value) : ''
// }


const SignUp = () => {

    const {
        register, 
        handleSubmit, 
        reset, 
        formState: { errors },
        control
    } = useForm<ISignUpFields>({
        mode: 'onChange'
    });

    const onSubmit:SubmitHandler<ISignUpFields> = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={ styles.form }>
            <p className={styles.form__header}>Создание аккаунта</p>
            <label htmlFor="nameSignUp" className={styles.form__label}>Имя</label>
            <input 
                { ...register('name', { required: 'Требуется ввести имя!' })}
                type='text'
                placeholder='Имя'
                id='nameSignUp'
                className={ errors?.name ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.name }/>
            <label htmlFor="nameSignUp" className={styles.form__label}>Фамилия</label>
            <input
                { ...register('surname', { required: 'Требуется ввести фамилию!' })}
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
                render={({field: { onChange, value }, fieldState: { error }}) => (
                    <div>
                        <div>
                            <Select
                                options={options}
                                // value={getValue(value)}
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
                { ...register('email', { required: 'Требуется ввести почту!' })}
                type='email'
                placeholder='mail@mail.ru'
                id='emailSignUp'
                className={ errors?.email ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.email }/>
            <label htmlFor="passwordSignUp" className={styles.form__label}>Пароль</label>
            <input
                { ...register('password', { required: 'Требуется ввести пароль!' })}
                type='password'
                placeholder='Пароль'
                id='passwordSignUp'
                className={ errors?.password ? [styles.form__input, styles.form__input_error].join(' ') : styles.form__input }
            />
            <InputErrorMessage errorName={ errors?.password }/>
            <label htmlFor="passswordRepeatSignUp" className={styles.form__label}>Повтор пароля</label>
            <input
                { ...register('passwordRepeat', { required: 'Требуется ввести повтор пароля!' })}
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