import { FC, PropsWithChildren, useEffect, useRef } from "react"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import styles from "./Layout.module.scss"
import GamesBar from "./games-bar/GamesBar"
import ChatList from "./chat-list/ChatList"
import { useLocation } from "react-router-dom"
import { clientRoute } from "../../enums"
import { useAppSelector } from "../../hooks/hooks"

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    
    const user = useAppSelector(state => state.user)
    const mainRef = useRef<HTMLDivElement>(null)

    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === clientRoute.login || pathname === clientRoute.register) mainRef.current?.scrollIntoView()
    })

    return (
        <div className={ styles.wrapper }>
            <Header/>
                <div ref={ mainRef } className={styles.main}>
                    { user.isAuth && <GamesBar/> }
                    <div className={styles.centralChild}>{ children }</div>
                    { user.isAuth && <ChatList/> }
                </div>
            <Footer/>
        </div>
    )
}

export default Layout