import React, { useState } from 'react';

import './Admin.css';
import '../index.css';
import Overview from '../Overview/Overview.jsx';
import Report from '../DetailsReport/Report.jsx';
import bell from '../assets/Bell.svg';
import what from '../assets/What.svg';
import avatar from '../assets/react.svg';
import search from '../assets/seach.png';
import logo from '../assets/Logo.svg';

const Admin = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <div className="container">
                <div className="menu">
                    <img src={logo} alt="" />
                    <ul className="inline text-[20px] gap-4">
                        <li className="cursor-pointer">Dashboard</li>
                        <li className="cursor-pointer">Project</li>
                        <li className="cursor-pointer">Teams</li>
                        <li className="cursor-pointer">Analytics</li>
                        <li className="cursor-pointer">Messages</li>
                        <li className="cursor-pointer">Integrations</li>
                    </ul>
                </div>
                <div className="header flex justify-between">
                    <div className="text-pink-600 font-bold text-lg justify-start">Dashboard</div>
                    <div className="flex items-center justify-between px-6 py-3">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-8 pr-4 py-1 rounded-full bg-gray-100 text-sm focus:outline-none"
                                />
                                <img
                                    src={search}
                                    alt="Search"
                                    className="absolute left-2 top-1.5 w-4 h-4 opacity-60"
                                />
                            </div>
                            <img src={bell} alt="Bell" className="w-5 h-5 cursor-pointer" />
                            <img src={what} alt="Help" className="w-5 h-5 cursor-pointer" />
                            <div className="flex items-center gap-2">
                                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                                    Anonymous
                                </span>
                                <img
                                    src={avatar}
                                    alt="Avatar"
                                    className="w-8 h-8 rounded-full border-2 border-pink-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-2">
                    <div>
                        <Overview />
                    </div>
                    <div>
                        <Report />
                    </div>
                </div>
                <div className="footer">Footer</div>
            </div>
        </div>
    )
}

export default Admin