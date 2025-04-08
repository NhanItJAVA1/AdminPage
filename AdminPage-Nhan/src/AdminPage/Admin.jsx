import { NavLink, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Admin.css';
import '../index.css';
import Overview from '../Overview/Overview.jsx';
import Report from '../DetailsReport/Report.jsx';
import bell from '../assets/Bell.svg';
import what from '../assets/What.svg';
import search from '../assets/seach.png';
import logo from '../assets/Logo.svg';
import Project from '../pages/Project.jsx';
import Teams from '../pages/Teams.jsx';
import Analytics from '../pages/Analytics.jsx';
import Messages from '../pages/Messages.jsx';
import Intergations from '../pages/Intergations.jsx';
import SideImage from '../assets/Side.svg';
const Admin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://67d0f74e825945773eb276c8.mockapi.io/User')
            .then(res => res.json())
            .then(users => {
                setUsers(users);
            });
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const navItems = [
        {
            name: "Dashboard",
            to: "/",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h6v6H4V4zm10 0h6v4h-6V4zM4 14h6v6H4v-6zm10-2h6v8h-6v-8z" />
                </svg>
            ),
        },
        {
            name: "Project",
            to: "/project",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 2.25h7.5L18 6.75v14.25a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V3.75A1.5 1.5 0 0 1 6 2.25Z" />
                </svg>
            ),
        },
        {
            name: "Teams",
            to: "/teams",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM4.5 18c0-2.5 3-4.5 6-4.5s6 2 6 4.5v1.5h-12V18z" />
                </svg>
            ),
        },
        {
            name: "Analytics",
            to: "/analytics",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M7 10v6m5-9v9m5-4v4" />
                </svg>
            ),
        },
        {
            name: "Messages",
            to: "/messages",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-6-3.75H9m6 3H9m3 3H9" />
                </svg>
            ),
        },
        {
            name: "Integration",
            to: "/integration",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-7-7h14m-5-5l5 5-5 5" />
                </svg>
            ),
        },
    ];

    const [resultCount, setResultCount] = useState(0);
    return (
        <div>
            <div className="container">
                <div className="menu">
                    <img src={logo} alt="" />
                    <ul className="flex flex-col gap-y-1 mt-6 [&>li]:p-1 [&>li]:rounded-lg ">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-3 rounded ${isActive
                                            ? "bg-[#f44b87] text-white font-bold"
                                            : "hover:bg-[#fa8bb2] hover:text-white text-black"
                                        }`
                                    }
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="max-w-xs rounded-2xl bg-white p-4 shadow-lg border border-gray-200 text-center">
                        <img src={SideImage} alt="Update illustration" className="mx-auto mb-4" />
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">V2.0 is available</h2>
                        <button className="w-full rounded-xl border border-blue-500 px-4 py-2 text-blue-500 transition hover:bg-blue-50">
                            Try now
                        </button>
                    </div>
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
                                    {users.name}
                                </span>
                                <img
                                    src={users.avatar}
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
                    <div className="mt-10 px-4 py-1">
                        <Routes>
                            <Route path="/" element={<Report setResultCount={setResultCount} />} />
                            <Route path="/project" element={<Project />} />
                            <Route path="/teams" element={<Teams />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/messages" element={<Messages />} />
                            <Route path="/integration" element={<Intergations />} />
                        </Routes>
                    </div>
                </div>
                <div className='footer'>
                    <p className="text-sm text-gray-500">{resultCount} Results</p>

                </div>
            </div>
        </div>
    )
}

export default Admin