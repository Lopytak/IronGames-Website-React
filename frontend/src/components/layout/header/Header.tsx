import styles from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { clientRoute } from '../../../enums'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../hooks/hooks'
import { resetUser } from '../../../store/user/user.slice'

const Header = () => {

    const user = useAppSelector(state => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(resetUser())
        localStorage.removeItem('accessToken')
        navigate(clientRoute.login)
    }

    return (
        <header className={styles.header}>
            <div className={styles.blueDiv}></div>
                <nav className={styles.nav}>
                    <div className={[styles.navSide, styles.nav__leftSide].join(' ')}>
                        {
                            user.isAuth ?
                            <Link to={ clientRoute.user + clientRoute.home + user.id.toString() } className={styles.navSide__item} >Моя страница</Link>
                            :
                            <Link to={ clientRoute.register } className={styles.navSide__item} >Создать аккаунт</Link>
                        }
                    </div>
                    <Link to={ clientRoute.home }>
                        <img className={styles.logo} src="logo.png" alt="лого"/>
                    </Link>
                    <div className={[styles.navSide, styles.nav__rightSide].join(' ')}>
                        {
                            user.isAuth ?
                            <p onClick={ () => logout() } className={styles.navSide__item}>Выйти</p>
                            :
                            <Link to={ clientRoute.login } className={styles.navSide__item}>Войти</Link>
                        }
                    </div>
                </nav>
            <div className={styles.blueDiv}></div>
        </header>
    )
}

export default Header