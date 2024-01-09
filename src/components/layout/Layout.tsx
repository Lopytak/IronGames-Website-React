
import { FC, PropsWithChildren, useEffect, useRef } from "react"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import styles from "./Layout.module.scss"
import GamesBar from "./games-bar/GamesBar"
import ChatList from "./chat-list/ChatList"
import { useLocation } from "react-router-dom"
import { route } from "../../enums"

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    
    const { pathname } = useLocation()
    const mainRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (pathname === route.login || pathname === route.register) mainRef.current?.scrollIntoView()
    })
    
    return (
        <div className={ styles.wrapper }>
            <Header/>
            <div ref={ mainRef } className={styles.main}>
                <GamesBar/> 
                { children }
                <ChatList/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout