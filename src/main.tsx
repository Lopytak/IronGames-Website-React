import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </React.StrictMode>,
)
