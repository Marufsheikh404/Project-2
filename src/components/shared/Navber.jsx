import { useState } from 'react';
import logo from '../../assets/New folder/logo.png';
import useAuth from '../../Hook/useAuth';
import { NavLink } from 'react-router';

const Navber = () => {
    const { SignOut, users } = useAuth();
    const [open, setOpen] = useState(false);

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/services", label: "Services" },
        { to: "/map", label: "Map" },
        { to: "/about", label: "About" },
        { to: "/percel", label: "Percel" },
        { to: "/dashboard", label: "Dashboard" },
    ];

    return (
        <div className="bg-white shadow-lg px-4 py-2 sticky top-0 z-50">

            {/* Navbar Wrapper */}
            <div className="flex items-center justify-between lg:grid lg:grid-cols-3">

                {/* Left Side - Hamburger + Logo */}
                <div className="flex items-center  gap-3">
                    {/* Hamburger */}
                    <button onClick={() => setOpen(!open)} className="lg:hidden">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h12M4 18h16" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="h-10" />
                        <h1 className="text-2xl font-bold -translate-x-3 mt-2">Zyntra</h1>
                    </div>
                </div>

                {/* Center Menu for Desktop */}
                <div className="hidden lg:flex justify-center">
                    <ul className="flex gap-6">
                        {navItems.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `font-bold text-sm transition ${isActive ? "text-[#CBEC68]" : "text-gray-600 hover:text-[#CBEC68]"}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </ul>
                </div>

                {/* Right Buttons for Desktop */}
                <div className="hidden lg:flex justify-end gap-3">
                    {users ? (
                        <button onClick={SignOut} className="btn text-lg hover:bg-[#CAEB66] font-semibold rounded-lg">Log Out</button>
                    ) : (
                        <NavLink to="/login" className="btn text-lg font-semibold rounded-lg">Sign In</NavLink>
                    )}

                    <NavLink to="/rider">
                        <button className="btn bg-[#CAEB66] text-lg font-semibold rounded-lg">Be a Rider</button>
                    </NavLink>
                </div>

            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="lg:hidden mt-4 bg-white shadow p-5 rounded-lg flex flex-col gap-5 animate-slideDown">

                    {navItems.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `font-bold text-lg ${isActive ? "text-[#CBEC68]" : "text-gray-700"}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    <div className="border-t pt-4">
                        {users ? (
                            <button onClick={SignOut} className="btn w-full text-lg font-semibold rounded-lg">Log Out</button>
                        ) : (
                            <NavLink to="/login" className="btn w-full text-lg font-semibold rounded-lg">Sign In</NavLink>
                        )}

                        <NavLink to="/rider">
                            <button className="btn w-full mt-2 bg-[#CAEB66] text-lg font-semibold rounded-lg">Be a Rider</button>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navber;
