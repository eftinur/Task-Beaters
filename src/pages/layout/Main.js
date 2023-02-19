import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer.js/Footer';
import Header from '../Home/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;