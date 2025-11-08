import React from 'react';
import { Link, Outlet } from 'react-router';
import { FaHome, FaBox, FaHistory, FaChevronRight, FaClipboardList, FaUserAlt } from "react-icons/fa";

const DashboardLayout = () => {

    return (
        <div className="drawer drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* Main content */}
            <div className="drawer-content">
                <Outlet />
            </div>

            {/* Sidebar */}
            <div className="drawer-side is-drawer-close:overflow-visible flex flex-col justify-between bg-[#ddf95f]">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                {/* Menu items */}
                <ul className="w-full">
                    {/* Homepage */}
                    <li>
                        <Link to="/" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                            <FaHome className="text-lg" />
                            <span className="is-drawer-close:hidden">Homepage</span>
                        </Link>
                    </li>

                    {/* Everyone */}
                    <li>
                        <Link to="/dashboard/mypercel" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                            <FaBox className="text-lg" />
                            <span className="is-drawer-close:hidden">My Percel</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/history" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                            <FaHistory className="text-lg" />
                            <span className="is-drawer-close:hidden">My History</span>
                        </Link>
                    </li>

                    {/* Admin Only */}
                    <>
                        <li>
                            <Link to="/dashboard/activeRiders" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                <FaUserAlt className="text-lg" />
                                <span className="is-drawer-close:hidden">Active Riders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/pendingRiders" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                <FaClipboardList className="text-lg" />
                                <span className="is-drawer-close:hidden">Pending Riders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/admin" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                <FaUserAlt className="text-lg" />
                                <span className="is-drawer-close:hidden">Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/assign-rider" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                <FaClipboardList className="text-lg" />
                                <span className="is-drawer-close:hidden">Assign Rider</span>
                            </Link>
                        </li>
                    </>
                </ul>

                {/* Toggle Drawer at bottom */}
                <div className="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right mt-auto">
                    <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-180">
                        <FaChevronRight className="text-xl" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
