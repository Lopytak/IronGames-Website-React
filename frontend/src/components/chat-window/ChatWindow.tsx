import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './ChatWindow.module.scss'
// import { useState } from 'react'

const ChatWindow = () => {
    
    // const [hasMore, setHasMore] = useState(true);

    return (
        <div className={styles.chatWindowWrapper}>
            <div className={styles.companion}>
                <img className={styles.companion__avatar} src="chess.png" alt="аватарка" />
                <div className={styles.companion__name}>{ true ? <>имя фамилия</> : <>длинное имя фамиляяя</>}</div>
            </div>
            <div id='fddns' className={styles.chatWindow}>
                <InfiniteScroll 
                className={styles.chatWindow__scroll}
                next={() => {}}
                scrollableTarget='fddns'
                hasMore={ /*hasMore*/ true }
                loader={<p>Загрузка...</p>} 
                dataLength={14}>
                    <div className={[styles.message, styles.myMessage].join(' ')}>мое сообщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое сообщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое сообdfsdfsdfdfsdfdfsdfsdfsfdщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое сооdfsбщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое сооdsfdfбщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое сообщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое сообщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое сsdfsdfообщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое dfsdfdfсообщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чуе</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое соsddfобщение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужоение</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чуж</div>
                    <div className={[styles.message, styles.companionMessage].join(' ')}>чужое сообщение</div>
                </InfiniteScroll>
            </div>
            <div className={styles.messageInput}>
                <input className={styles.messageInput__input} type='text' placeholder='Напишите сообщение...' />
                <div className={styles.messageInput__button}>отпр</div>
            </div>
        </div>
    )
}

export default ChatWindow