import { Link } from 'react-router-dom'
import styles from './GamesBar.module.scss'
import { useQuery } from '@tanstack/react-query';
import { DataService } from '../../../services/DataService';

const GamesBar = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['gamePreviews'],
        queryFn: () => DataService.getGamePreviews(),
        select: ({ data }) => data
    });

    return (
        <div className={styles.gamesBar}>
            {
                error ?
                    <div>Ошибка</div>
                    :
                    isPending ? <div>Загрузка...</div> : data?.map(gamePreview => 
                        <Link to={gamePreview.websiteLink} key={gamePreview.id}>
                            <img className={styles.previewImage} src={gamePreview.imageSrc} alt={gamePreview.name} />
                        </Link>      
                    )
            }
            <div className={styles.gamesBar__button}>Игры</div>
        </div>
    )
}

export default GamesBar