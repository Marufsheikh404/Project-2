import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../components/shared/Navber';
import Footer from '../components/shared/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;