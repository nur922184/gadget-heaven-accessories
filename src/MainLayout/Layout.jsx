import React from 'react';
import Navber from '../component/Navber';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
    return (
        <div>
            <Toaster></Toaster>
            {/* navbar */}
           <Navber></Navber>
            {/* dynamic section */}
            <Outlet></Outlet>
            <div className=''> </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;