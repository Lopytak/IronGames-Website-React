import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Layout from './layout/Layout';
import { clientRoute } from '../enums';
import { DataService } from '../services/DataService';
import { authorizeUser } from '../helpers/helpers';
import { useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';

const Main = () => {

    const user = useAppSelector(state => state.user)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await DataService.checkForAuthorization()
            authorizeUser(data.accessToken)
        }

        fetchData()
    }, [])

    return (
        <Layout>
            <main>
                <Routes>
                    <Route path={ clientRoute.home } element={ <Home/> }/>
                    <Route path={ clientRoute.login } element={ user.isAuth ? <Home/> : <Login/> }/>
                    <Route path={ clientRoute.register } element={ user.isAuth ? <Home/> : <Register/> }/>
                </Routes>
            </main>
        </Layout>
    );
}

export default Main;