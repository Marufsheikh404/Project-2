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
    );

    return (
        <div className="bg-black text-primary-content">
            <footer className="p-10 flex flex-col md:flex-row md:justify-center items-center md:items-start gap-8 md:gap-0">
                {/* Logo and Description */}
                <aside className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="logo" className="w-12 h-12" />
                        <h1 className='text-2xl font-bold -translate-x-3 mt-2'>Zyntra</h1>
                    </div>
                    <p className="font-bold text-sm md:text-base max-w-xs md:max-w-md">
                        Enjoy fast, reliable parcel delivery with real-time <br /> tracking and
                        zero hassle. From personal packages to <br />  business shipments — we deliver on time, every time.
                    </p>
                </aside>

                {/* Links */}
                <ul className='flex  justify-center md:justify-start gap-4 text-center md:text-left -translate-x-6'>
                    {links}
                </ul>

                {/* Social Icons */}
                <nav>
                    <div className="flex gap-2 justify-center md:justify-start">
                        <CiLinkedin size={30}  />
                        <CiFacebook size={30} />
                        <LuTwitter size={30} />
                        <FiYoutube size={30} />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
