import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                   <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;