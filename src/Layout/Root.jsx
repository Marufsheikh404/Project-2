import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../components/shared/Navber';
import Footer from '../components/shared/Footer';

const Root = () => {
    return (
        <div className='container px-6 mx-auto'>
            <div className='my-2'><Navber></Navber></div>
            <div className='my-2'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;