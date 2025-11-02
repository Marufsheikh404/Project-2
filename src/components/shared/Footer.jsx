import React from 'react';
import logo from '../../assets/New folder/logo.png';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { LuTwitter } from 'react-icons/lu';
import { FiYoutube } from 'react-icons/fi';

const Footer = () => {
    const links = (
        <>
            <li className='text-sm font-semibold text-[#919191]'>Services</li>
            <li className='text-sm font-semibold text-[#919191]'>Coverage</li>
            <li className='text-sm font-semibold text-[#919191]'>About Us</li>
            <li className='text-sm font-semibold text-[#919191]'>Pricing</li>
            <li className='text-sm font-semibold text-[#919191]'>Blog</li>
            <li className='text-sm font-semibold text-[#919191]'>Contact</li>
        </> 
    )
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
                <aside>
                    <div className='flex'>
                        <img src={logo} alt="logo" />
                        <h1 className='text-2xl font-bold mt-6'>Profast</h1>
                    </div>
                    <p className="font-bold">
                        Enjoy fast, reliable parcel delivery with real-time tracking and
                        <br />
                         zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p> 
                </aside>
                <div className='flex list-none gap-4'>
                    {links}
                </div>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                       <CiLinkedin size={30}/>
                       <CiFacebook size={30} />
                       <LuTwitter  size={30}/>
                       <FiYoutube  size={30}/>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;