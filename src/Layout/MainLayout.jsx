import React from 'react';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Shared/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;