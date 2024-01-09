import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__header}>Контактная информация</div>
            <div className={styles.footer__inner}>
                <div>
                    <div>Почта</div>
                    <div> *******@mail.ru</div>
                </div>
                <div>
                    <div>Номер телефона</div>
                    <div>+7**********</div>
                </div>
                <div>    
                    <div>Социальные сети</div>
                    <div className={ styles.contacts }>
                        <a href="https://vk.com">
                            <img className={ styles.contacts__logo } src='vk-logo.png' alt="VK"/>
                        </a>
                        <a href="https://facebook.com">
                            <img className={ styles.contacts__logo } src='fb-logo.png' alt="FB"/>
                        </a>
                        <a href="https://twitter.com">
                            <img className={ styles.contacts__logo } src='x-logo.webp' alt="X"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer