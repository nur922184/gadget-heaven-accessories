
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
        <nav className=" sticky top-0 z-50 flex items-center justify-between p-4 bg-white shadow-md">
            {/* Brand */}
            <div className="text-2xl font-bold text-gray-800">Gadget Heaven</div>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8 text-gray-700">
                <Link to='/' className="cursor-pointer hover:text-purple-600"> Home</Link>
                <Link to='/statistics' className="cursor-pointer hover:text-purple-600">Statistics</Link>
                <Link to='/dashboard' className="cursor-pointer hover:text-purple-600">Dashboard</Link>
                <Link to='/testimonials' className="cursor-pointer hover:text-purple-600">Testimonials</Link>
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
                <ul className="absolute top-16 right-0 w-[50%] bg-white shadow-lg flex flex-col items-center space-y-4 p-4 md:hidden">
                    <Link to='/' onClick={handleMenuItemClick} className="cursor-pointer hover:text-purple-600"> Home</Link>
                    <Link to='/statistics' onClick={handleMenuItemClick} className="cursor-pointer hover:text-purple-600">Statistics</Link>
                    <Link to='/dashboard' onClick={handleMenuItemClick} className="cursor-pointer hover:text-purple-600">Dashboard</Link>
                    <Link to='/testimonials' onClick={handleMenuItemClick} className="cursor-pointer hover:text-purple-600">Testimonials</Link>
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
//           <li className="cursor-pointer hover:text-purple-600"><MdHome className="inline-block mr-1" /> Home</li>
//           <li className="cursor-pointer hover:text-purple-600">Statistics</li>
//           <li className="cursor-pointer hover:text-purple-600">Dashboard</li>
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