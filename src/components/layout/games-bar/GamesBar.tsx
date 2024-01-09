import { Link } from 'react-router-dom'
import styles from './GamesBar.module.scss'

const GamesBar = () => {
    return (
        <div className={styles.gamesBar}>
            <Link to={'chess'}>
                <img className={styles.previewImage} src='chess.png' alt='Шахматы' />
            </Link>
            <Link to={'arkanoid'}>
                <img className={styles.previewImage} src='arkanoid.jpg' alt='Арканоид' />
            </Link>
            <Link to={'air-hockey'}>
                <img className={styles.previewImage} src='air-hockey.webp' alt='Хоккей' />
            </Link>
            <Link to={'iron-jump'}>
                <img className={styles.previewImage} src='air-hockey.webp' alt='Платформер' />
            </Link>
            <Link to={'iron-jump'}>
                <img className={styles.previewImage} src='air-hockey.webp' alt='Платформер' />
            </Link>
            <Link to={'iron-jump'}>
                <img className={styles.previewImage} src='air-hockey.webp' alt='Платформер' />
            </Link>
            <div className={styles.gamesBar__button}>Игры</div>
        </div>
    )
}

export default GamesBar