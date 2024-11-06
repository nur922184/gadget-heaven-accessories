
import { FaHeart } from 'react-icons/fa'; // Font Awesome icons
import { HiShoppingCart } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navber = () => {
    // State to track if the menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleMenuItemClick = () => {

        setIsMenuOpen(false);
    };

    return (
        <nav className=" sticky top-0 z-10 b backdrop-filter backdrop-blur-lg flex items-center justify-between p-4 shadow-md">
            {/* Brand */}
            <div className="hover:scale-110 hover:-translate-y-1 transition text-2xl font-bold text-gray-800"> <Link>Gadget Heaven</Link> </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8 text-gray-700">
                <Link to='/' className="cursor-pointer hover:text-purple-800">Home</Link>
                <Link to='/statistics' className="cursor-pointer hover:text-purple-800">Statistics</Link>
                <Link to='/testimonials' className="cursor-pointer hover:text-purple-800">Testimonials</Link>
                <Link to='/dashboard' className="cursor-pointer hover:text-purple-800">Dashboard</Link>
            </ul>

            {/* Desktop Icons */}
            <div className="flex space-x-6 text-gray-700">
                <HiShoppingCart className="text-xl cursor-pointer" />
                <FaHeart className="text-xl cursor-pointer" />
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
                <TiThMenu className="text-2xl text-gray-700 cursor-pointer" onClick={toggleMenu} />
            </div>

            {/* Mobile Menu (shown when isMenuOpen is true) */}
            {isMenuOpen && (
                <ul className="absolute top-16 right-0 w-[30%] bg-purple-400 p-2 rounded- shadow-lg flex flex-col items-center space-y-4 md:hidden text-white">
                    <Link to='/' onClick={handleMenuItemClick} className="cursor-pointer hover:text-purple-700 hover:bg-slate-100 bg-purple-600 rounded-md p-1"> Home</Link>
                    <Link to='/statistics' onClick={handleMenuItemClick} className="cursor-pointer hover:text-purple-700 hover:bg-slate-100 bg-purple-600 rounded-md p-1">Statistics</Link>
                    <Link to='/dashboard' onClick={handleMenuItemClick} className="cursor-pointer hover:text-purple-700 hover:bg-slate-100 bg-purple-600 rounded-md p-1">Dashboard</Link>
                    <Link to='/testimonials' onClick={handleMenuItemClick} className="cursor-pointer hover:text-purple-700 hover:bg-slate-100 bg-purple-600 rounded-md p-1">Testimonials</Link>
                </ul>
            )
            }
        </nav >
    );
};

export default Navber;





// import { FaUser, FaHeart, FaBars } from 'react-icons/fa'; // Font Awesome icons
// import { MdHome } from 'react-icons/md'; // Material Design icon
// import { HiShoppingCart } from "react-icons/hi";


// const Navber = () => {

//     return (

//         <nav className="flex items-center justify-between p-4 bg-white shadow-md">
//         <div className="text-2xl font-bold text-gray-800">Gadget Heaven</div>
//         <ul className="hidden md:flex space-x-8 text-gray-700">
//           <li className="cursor-pointer hover:text-purple-600 bg-purple-400 p-2 rounded-"><MdHome className="inline-block mr-1" /> Home</li>
//           <li className="cursor-pointer hover:text-purple-600 bg-purple-400 p-2 rounded-">Statistics</li>
//           <li className="cursor-pointer hover:text-purple-600 bg-purple-400 p-2 rounded-">Dashboard</li>
//         </ul>
//         <div className="hidden md:flex space-x-4 text-gray-700">
//           <HiShoppingCart className="text-xl cursor-pointer" />
//           <FaHeart className="text-xl cursor-pointer" />
//         </div>
//         <div className="md:hidden">
//           <FaBars className="text-2xl text-gray-700" />
//         </div>
//       </nav>
//     );
//   };
// export default Navber;