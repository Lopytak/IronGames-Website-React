import { Link } from 'react-router-dom'
import styles from './GamesGeneralInfo.module.scss'
import { useQuery } from '@tanstack/react-query'
import { DataService } from '../../services/DataService'

const GamesGeneralInfo = () => {
    
    const { isPending, error, data } = useQuery({
        queryKey: ['gamePreviews'],
        queryFn: () => DataService.getGamePreviews(),
        select: ({ data }) => data
    });

    return (
        <div className={styles.gamesGeneralInfo}>
            {
                error ?
                <div>Ошибка</div>
                :
                isPending ? <div>Загрузка...</div> : data?.map((gamePreview) =>
                    <Link to={gamePreview.websiteLink} className={styles.previewItem} key={ gamePreview.id }>
                        <img className={styles.previewItem__image} src={gamePreview.imageSrc} alt={gamePreview.name}/>
                        <div className={styles.previewItem__title}>{gamePreview.name}</div>
                    </Link>
            )}
        </div>
    )
}

export default GamesGeneralInfo