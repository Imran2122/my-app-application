import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>

            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* outlet */}
            {/* footer */}
        </div>
    );
};

export default MainLayout;