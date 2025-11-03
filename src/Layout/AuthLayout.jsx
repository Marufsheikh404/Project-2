import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/New folder/authImage.png'

const AuthLayout = () => {
    return (
        <div>
            <div className="card card-side max-h-screen h-full shadow-sm">
                <div className="card-body flex-1">
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img 
                        className='w-96 h-96 flex justify-center translate-y-12'
                        src={authImg }
                        alt="Movie" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;