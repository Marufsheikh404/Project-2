import { Outlet } from 'react-router';
import loginAnimation from '../animations/register.json'
import Lottie from 'lottie-react';

const AuthLayout = () => {
    return (
        <div>
            <div className="card card-side flex flex-col lg:flex-row max-h-screen h-full shadow-sm overflow-x-hidden">
                <div className="card-body flex-1">
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <Lottie style={{width:500, height:500 , marginTop:60, marginRight:40}} animationData={loginAnimation}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;