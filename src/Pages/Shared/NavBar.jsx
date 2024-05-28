import React from 'react';
import { Link } from 'react-router-dom';
import HomeMarq from '../Home/HomeMarq';

const NavBar = () => {
    return (
        <div>
                <HomeMarq/>
            <div className='py-4 bg-emerald-50 mb-2 '>
            <div className='flex justify-center gap-8 font-bold'>
                <Link className='hover:text-orange-500' to="/">Home</Link>
                <Link className='hover:text-orange-500' to="/contact">Contact</Link>
                <Link className='hover:text-orange-500' to="/Login">Login</Link>
                <Link className='hover:text-orange-500' to="/Signup">SignUp</Link>
                <Link className='hover:text-orange-500' to="/dashboard/AdminHome">Dashboard</Link>
            </div>
        </div>
        </div>
    );
};

export default NavBar;