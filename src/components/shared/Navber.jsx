import React from 'react';
import logo from '../../assets/New folder/logo.png';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hook/useAuth';

const Navber = () => {
    const { SignOut, users } = useAuth();

    const handleClick = () => {
        SignOut()
    };
    const links = (
        <>
            <Link to={'/'}><li className='text-sm font-semibold text-[#919191]'>Home</li></Link>
            <li className='text-sm font-semibold text-[#919191]'>Services</li>
            <Link to={'/map'}> <li className='text-sm font-semibold text-[#919191]'>Map</li></Link>
            <li className='text-sm font-semibold text-[#919191]'>About Us</li>
            <Link to={'/percel'}><li className='text-sm font-semibold text-[#919191]'>Send-Percel</li></Link>
            <Link to={'/dashboard'}><li className='text-sm font-semibold text-[#919191]'>Dashboard</li></Link>
            <Link to={'/rider'}><li className='text-sm font-semibold text-[#919191]'>Be a Rider</li></Link>
        </>
    )
    return (
        <div className="navbar bg-[FFFFFF] shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" />
                    <h1 className='text-2xl font-bold mt-3 -translate-x-3'>Profast</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {
                    users ? <a onClick={handleClick} className="btn text-lg font-semibold rounded-lg">Log~Out</a> : <NavLink to={'/login'}> <a className="btn text-lg font-semibold rounded-lg">Sign In</a></NavLink>
                }
                <a className="btn bg-[#CAEB66] text-lg font-semibold rounded-lg">Be a Rider</a>
            </div>
        </div>
    );
};

export default Navber;