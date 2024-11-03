import React from 'react';
import Heading from '../component/Heading';

const Dashborad = () => {
    return (
        <div className="bg-purple-600 text-center py-10 h-[10%] text-white">
            {/* Container for Title, Subtitle, and Button */}
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Dashboard
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full mr-5 hover:bg-gray-100">
                    cart
                </button>
                <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 ">
                    Wishlist
                </button>
            </div>
        </div>
    );
};

export default Dashborad;