import React from 'react';
import Navber from '../component/Navber';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
            {/* navbar */}
           <Navber></Navber>
            {/* dynamic section */}
            <Outlet></Outlet>
            <div className='min-h-[calc(100vh-152px)]'> </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;