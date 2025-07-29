import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Landing-Header/Header';
import Footer from '../Landing-Footer/Footer';

const LandingLayout = () => {
    return (
        <div className="web-page">
            <Header />
                <Outlet />
            <Footer />
        </div>
    )
}

export default LandingLayout;