import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Layout from './layout/Layout';
import { route } from '../enums';

const Main = () => {
    return (
        <Layout>
            <Routes>
                <Route path={ route.home } element={ <Home/> }/>
                <Route path={ route.login } element={ <Login/> }/>
                <Route path={ route.register } element={ <Register/> }/>
            </Routes>
        </Layout>
    );
}

export default Main;