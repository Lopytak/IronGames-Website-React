import { Link } from 'react-router-dom'
import styles from './ChatList.module.scss'
import ChatWindow from '../../chat-window/ChatWindow'
import { useState } from 'react'

const ChatList = () => {

    const [showChatWindow, setShowChatWindow] = useState(false)

    const toggleChatWindow = () => {
        if (showChatWindow) setShowChatWindow(false)
        else setShowChatWindow(true)
    }

    return (
        <div className={styles.chatList}>
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
            <div className={styles.chatList__button} onClick={() => toggleChatWindow()}>Чаты</div>
            {
                showChatWindow && <ChatWindow/>
            }
        </div>
    )
}

export default ChatList