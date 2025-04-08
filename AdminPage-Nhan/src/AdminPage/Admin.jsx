import React, { useState } from 'react';
import { NavLink, Routes, Route } from "react-router-dom";
import './Admin.css';
import '../index.css';
import Overview from '../Overview/Overview.jsx';
import Report from '../DetailsReport/Report.jsx';
import bell from '../assets/Bell.svg';
import what from '../assets/What.svg';
import avatar from '../assets/react.svg';
import search from '../assets/seach.png';
import logo from '../assets/Logo.svg';
import Project from '../pages/Project.jsx';
import Teams from '../pages/Teams.jsx';
import Analytics from '../pages/Analytics.jsx';
import Messages from '../pages/Messages.jsx';
import Intergations from '../pages/Intergations.jsx';

const Admin = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navItems = [
        {
            name: "Dashboard",
            to: "/",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                    />
                </svg>
            ),
        },
        {
            name: "Project",
            to: "/project",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                    />
                </svg>
            ),
        },
        {
            name: "Teams",
            to: "/teams",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                </svg>
            ),
        },
        {
            name: "Analytics",
            to: "/analytics",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                </svg>
            ),
        },
        {
            name: "Messages",
            to: "/messages",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                </svg>
            ),
        },
        {
            name: "Integration",
            to: "/integration",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                </svg>
            ),
        },
    ];
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
                    <div className="mt-10 px-4 py-1">
                        <Routes>
                            <Route path="/" element={<Report />} />
                            <Route path="/project" element={<Project />} />
                            <Route path="/teams" element={<Teams />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/messages" element={<Messages />} />
                            <Route path="/integration" element={<Intergations />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin