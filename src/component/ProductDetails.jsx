import React, { useEffect, useState,  } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi';
import { FaHeart } from 'react-icons/fa';
import { AddFavorite, } from '../Utils';
import { AddProduct } from '../Utils/addToProduct';
// import { CartContext } from '../context/CartContext';
const ProductDetails = () => {
    useEffect(() => {
        document.title = "Gadget Heaven || Home || Details";
      }, []);
    const { id } = useParams();
    // const { addToCart } = useContext(CartContext); // Access addToCart from context
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/product.json')
            .then(response => response.json())
            .then(data => {
                const selectedProduct = data.find(item => item.product_id === id);
                setProduct(selectedProduct);
            });
    }, [id]);

    // handle favariter wisslist
    const addToWishList = product =>{
        AddFavorite(product)
        // getAllFaverites()
    }
    const addToProList = product =>{
      AddProduct(product)  
    }

    if (!product) return <p>Loading...</p>;
    return (
        <div className='mb-[500px]'>
            <div className="bg-purple-600 py-10 -h-[10%] text-white">
                <Link to={'/'}>
                    <button
                        className="absolute mt-4 px-4 py-2 text-5xl rounded-lg mr-3">
                        🔙
                    </button>
                </Link>
                {/* Container for Title, Subtitle, and Button */}
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl text-center font-bold mb-4">
                        Product Details
                    </h1>
                    <p className="text-lg md:text-xl text-center mb-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                {/* Details Section */}
                <div className="-mt-56 border-2 bg-white text-black  px-4 absolute m-auto left-0 right-0 top-[480px] bottom-0 rounded-lg shadow-lg md:w-2/3 lg:w-3/2 h-[500px]">
                    <div className='flex gap-20 mt-4'>
                        <div>
                            <img src={product.product_image} alt={product.product_title} className="transition h-48 w-48 object-cover mb-4 rounded-lg hover:scale-110 hover:-translate-y-1" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{product.product_title}</h2>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <p className="text-gray-600 mb-2">Category: {product.category}</p>
                            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                            <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
                        </div>
                    </div>
                    <div className='flex gap-40'>
                        <div>
                            <div className='flex'>
                                <button
                                   onClick={() => addToProList(product)}
                                    className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg flex">
                                    <HiShoppingCart className="text-xl cursor-pointer mr-3" />
                                    Add to Cart
                                </button>
                                <button onClick={() => addToWishList(product)}>
                                    <FaHeart className="text-xl cursor-pointer ml-8 mt-4" /></button>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600 mb-2 ">Rating: {product.rating}
                                <div className="rating ml-4">
                                    <input type="radio" name="rating-2" className="mask mask-star-2  bg-purple-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-purple-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2  bg-purple-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2  bg-purple-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2  bg-purple-400" />
                                </div>
                            </p>
                            <p className="text-gray-600 mb-2">Warranty: {product.warranty}</p>
                            <p className="text-gray-600 mb-3">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>

                            <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                {product.Specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;
