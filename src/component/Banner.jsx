import React from 'react';

const Banner = () => {
    return (
        <div className="bg-purple-600 text-center py-20 -h-[10%] text-white">
          {/* Container for Title, Subtitle, and Button */}
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 mb-24">
              Shop Now
            </button>
          </div>
          {/* Image Section */}
          <div className="-mt-10 bg-bannerBg bg-cover bg-center bg-no-repeat px-4 absolute m-auto left-0 right-0 top-[480px] bottom-0 rounded-lg shadow-lg md:w-2/3 lg:w-1/2 h-96">
           
          </div>
        </div>
      );
    };

export default Banner;