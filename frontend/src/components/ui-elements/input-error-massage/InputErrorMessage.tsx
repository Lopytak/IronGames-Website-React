import styles from './InputErrorMessage.module.scss'
import { IInputErrorName } from "../../../types/form.interface"

const InputErrorMessage = ({errorName = undefined}: IInputErrorName) => {
    return (
        <div>
            {
                errorName?.message && (
                    <div className={styles.errorMessage}>{ errorName?.message }</div>
                )
            }
        </div>
    )
}

export default InputErrorMessage