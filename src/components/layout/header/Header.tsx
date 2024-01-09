import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { route } from '../../../enums'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.blueDiv}></div>
                <div className={styles.nav}>
                    <div className={[styles.navSide, styles.nav__leftSide].join(' ')}>
                        <Link to={ route.register } className={styles.navSide__item} >Создать аккаунт</Link>
                    </div>
                    <img className={styles.logo} src="logo.png" alt="лого"/>
                    <div className={[styles.navSide, styles.nav__rightSide].join(' ')}>
                        <Link to={route.login} className={styles.navSide__item}>Войти</Link>
                    </div>
                </div>
            <div className={styles.blueDiv}></div>
        </div>
    )
}

export default Header