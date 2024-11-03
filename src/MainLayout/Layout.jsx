import React from 'react';
import Navber from '../component/Navber';
import Footer from '../component/Footer';


const Layout = () => {
    return (
        <div>
            {/* navbar */}
           <Navber></Navber>
            {/* dynamic section */}
            <div className='min-h-[450px]'> </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;