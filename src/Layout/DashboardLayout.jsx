import React from 'react';
import { Link, Outlet } from 'react-router';
import { FaHome, FaBox, FaHistory, FaChevronRight } from "react-icons/fa";
import useUserRole from '../Hook/useUserRole';

const DashboardLayout = () => {

    const { role, loading } = useUserRole();


    return (
        <div className="drawer drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* Main content */}
            <div className="drawer-content">
                <Outlet />
            </div>

            {/* Sidebar */}
            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="is-drawer-close:w-14 is-drawer-open:w-64 bg-base-200 flex flex-col items-start min-h-full justify-between">

                    {/* Sidebar links */}
                    <ul className="w-full">
                        <li>
                            <Link to={"/"} className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                <FaHome className="text-lg" />
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={'/dashboard/mypercel'} className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                <FaBox className="text-lg" />
                                <span className="is-drawer-close:hidden">My Percel</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={'/dashboard/history'} className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                <FaHistory className="text-lg" />
                                <span className="is-drawer-close:hidden">My History</span>
                            </Link>
                        </li>

                        { !loading && role === 'admin' &&
                            <>
                                <li>
                                    <Link to={'/dashboard/activeRiders'} className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                        <FaHistory className="text-lg" />
                                        <span className="is-drawer-close:hidden">Active Riders</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={'/dashboard/pendingRiders'} className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                        <FaHistory className="text-lg" />
                                        <span className="is-drawer-close:hidden">Pending Riders</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={'/dashboard/admin'} className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full">
                                        <FaHistory className="text-lg" />
                                        <span className="is-drawer-close:hidden">Admin</span>
                                    </Link>
                                </li>
                            </>
                        }

                    </ul>

                    {/* Open/Close Drawer Button */}
                    <div className="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Toggle Drawer">
                        <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-180">
                            <FaChevronRight className="text-xl" />
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
