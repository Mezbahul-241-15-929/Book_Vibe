import React from 'react';
import Navbar from '../../assets/Components/Header/Navbar';
import Footer from '../../assets/Components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;