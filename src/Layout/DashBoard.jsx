import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaBookMedical } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";


const Dashboard = () => {



    return (
        <div>
            <div className="drawer lg:drawer-open  ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <Outlet />
                </div>

                <div className="drawer-side" >
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bg-gray-600 text-white border-e-4 border-red-300">
                                <li><NavLink to="/dashboard/AdminHome"><AiFillHome /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/AdminProfile"><CgProfile />Admin Profile</NavLink></li>
                                <li><NavLink to="/dashboard/StudentsDetails"><FaBookReader /> Students Details</NavLink></li>
                                <li><NavLink to="/dashboard/ManageAttendance"><FaBookMedical /> Manage Attendance</NavLink></li>
                                <li><NavLink to="/"><HiOutlineHome /> Back To Home</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
