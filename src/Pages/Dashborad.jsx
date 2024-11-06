import React, { useEffect, useState } from 'react';
import { getAllFaverites } from '../Utils';
import { Link } from 'react-router-dom';
import { getAllAddedPro } from '../Utils/addToProduct';
import { HiAdjustments } from 'react-icons/hi';
import images from '../image/Group.png'

const Dashborad = () => {
    // const {} = useContext(CartContext)
    const [wish, setWish] = useState([])
    const [Cart, setToCart] = useState([])
    const [showWishlist, setShowWishlist] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');


    const handleSortByPrice = () => {
        // Toggle sort order between ascending and descending
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);

        const sortedCart = [...Cart].sort((a, b) => {
            return newSortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        });

        setToCart(sortedCart);
    };


    useEffect(() => {
        const favorites = getAllFaverites()
        setWish(favorites)
    }, [])
    useEffect(() => {
        const addToCart = getAllAddedPro()
        setToCart(addToCart)
    }, [])

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
                    <button
                        onClick={() => setShowWishlist(false)}
                        className={`hover:scale-110 hover:-translate-y-1 transition bg-white text-purple-600 font-semibold px-8 py-3 rounded-full mr-5 hover:bg-gray-100 ${!showWishlist ? 'bg-gray-100' : ''}`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => setShowWishlist(true)}
                        className={`hover:scale-110 hover:-translate-y-1 transition bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 ${showWishlist ? 'bg-gray-100' : ''}`}
                    >
                        Wishlist
                    </button>
                </div>
            </div>
            <div className="p-4">
                {/* Conditionally render based on showWishlist state */}
                {showWishlist ? (
                    <div className='w-[75%] m-auto'>
                        <h2 className="text-2xl font-bold mb-4">Dashboard - Wish</h2>
                        {wish.length > 0 ? (
                            wish.map((item, index) => (
                                <div key={index} className="flex items-center bg-gray-100 border border-gray-200 rounded-lg p-4 mb-4 relative">
                                    <img
                                        src={item.product_image}
                                        alt={item.product_title}
                                        className="w-20 h-20 rounded-lg mr-4"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold">{item.product_title}</h3>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Description:</span> {item.description}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Price:</span> ${item.price.toFixed(2)}
                                        </p>
                                        <Link to={'/'}>
                                            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                                                Add to Cart
                                            </button>
                                        </Link>
                                    </div>
                                    <button
                                        className="absolute top-4 right-4 text-red-500 text-lg hover:text-red-700"
                                        aria-label="Remove item"
                                    >
                                        &times;
                                    </button>

                                </div>

                            ))
                        ) : (
                            <p>No favorites found</p>
                        )}
                    </div>
                ) : (
                    <div className='w-[75%] m-auto'>
                        <div className='flex justify-between mb-9'>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Dashboard - Cart Items</h2>
                            </div>
                            <div className="flex items-center space-x-4">
                                <p className="font-bold text-lg">
                                    Total cost: 1199.99 <span className="text-gray-800">{ }</span>
                                </p>
                                <button onClick={handleSortByPrice} className="flex items-center space-x-1 px-4 py-2 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-100 transition">
                                
                                    <span>Sort by Price</span>
                                    <HiAdjustments></HiAdjustments>
                                </button>
                                <label htmlFor="my_modal_6" className="btn px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition">Purchase</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                <div className="modal" role="dialog">
                                    <div className="modal-box text-center">
                                        <img className='m-auto' src={images} alt="" />
                                        <h3 className="text-lg font-bold">Payment Successfully</h3>
                                        <p className="py-4">TThanks for purchasing.</p>
                                        <p className="py-4">Total:2449.96</p>
                                        <div className="modal-action">
                                            <label htmlFor="my_modal_6" className="btn w-full rounded-full bg-purple-200">Close!</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {Cart.length > 0 ? (
                            Cart.map((item, index) => (
                                <div key={index} className="flex items-center bg-gray-100 border border-gray-200 rounded-lg p-4 mb-4 relative">
                                    <img
                                        src={item.product_image}
                                        alt={item.product_title}
                                        className="w-20 h-20 rounded-lg mr-4"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold">{item.product_title}</h3>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Description:</span> {item.description}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Price:</span> ${item.price.toFixed(2)}
                                        </p>
                                    </div>
                                    <button
                                        className="absolute top-4 right-4 text-red-500 text-lg hover:text-red-700"
                                        aria-label="Remove item"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No cart items found</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashborad;