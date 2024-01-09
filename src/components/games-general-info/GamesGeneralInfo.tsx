import { Link } from 'react-router-dom'
import styles from './GamesGeneralInfo.module.scss'

const GamesGeneralInfo = () => {
    return (
        <div className={styles.gamesGeneralInfo}>
            <Link to={''} className={styles.previewItem}>
                <img className={styles.previewItem__image} src='chess.png' alt='Шахматы'/>
                <div className={styles.previewItem__title}>Шахматы</div>
            </Link>
            <Link to={''} className={styles.previewItem}>
                <img className={styles.previewItem__image} src='arkanoid.jpg' alt='Арканоид'/>
                <div className={styles.previewItem__title}>Арканоид</div>
            </Link>
            <Link to={'air-hockey'} className={styles.previewItem}>
                <img className={styles.previewItem__image} src='air-hockey.webp' alt='Хоккей'/>
                <div className={styles.previewItem__title}>Хоккей</div>
            </Link>
            <Link to={'iron-jump'} className={styles.previewItem}>
                <img className={styles.previewItem__image} src='air-hockey.webp' alt='Платформер'/>
                <div className={styles.previewItem__title}>Платформер</div>
            </Link>
            <Link to={''} className={styles.previewItem}>
                <img className={styles.previewItem__image} src='air-hockey.webp' alt='Платформер'/>
                <div className={styles.previewItem__title}>Платформер</div>
            </Link>
            <Link to={''} className={styles.previewItem}>
                <img className={styles.previewItem__image} src='air-hockey.webp' alt='Платформер'/>
                <div className={styles.previewItem__title}>Платформер</div>
            </Link>
        </div>
    )
}

export default GamesGeneralInfo