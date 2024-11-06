import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
// import { CartContext } from '../context/CartContext';

const Dashborad = () => {
    // const {} = useContext(CartContext)
    useEffect(() => {
        document.title = "Gadget Heaven || Dashboard";
      }, []);

    return (
        <div>
            <div className="bg-purple-600 text-center py-10 h-[10%] text-white">
                {/* Container for Title, Subtitle, and Button */}
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Dashboard
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className=" hover:scale-110 hover:-translate-y-1 transition bg-white text-purple-600 font-semibold px-8 py-3 rounded-full mr-5 hover:bg-gray-100">
                        cart
                    </button>
                    <button className="hover:scale-110 hover:-translate-y-1 transition bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 ">
                        Wishlist
                    </button>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Dashboard - Cart Items</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* {product.map((item, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-white">
                            <img src={item.product_image} alt={item.product_title} className="h-32 w-full object-cover rounded-lg mb-4" />
                            <h3 className="font-bold text-lg">{item.product_title}</h3>
                            <p className="text-gray-600">Price: ${item.price}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default Dashborad;