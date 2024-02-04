import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './store/store.ts'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={ store }>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
)
