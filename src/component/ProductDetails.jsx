// // src/components/ProductDetails.jsx
import React from 'react';

const ProductDetails = () => {
    return (
        <div>
            <h1>prdict delt </h1>
        </div>
    );
};

export default ProductDetails;


























// import React, { useContext } from 'react';
// import { FaHeart } from 'react-icons/fa'; // Font Awesome icons
// import { HiShoppingCart } from "react-icons/hi";

// const ProductDetails = ({ product, onBack }) => {

//     const handleAddToCart = () => {
//         addToCart(product);
//     };
//     return (
//         <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//             <img src={product.product_image} alt={product.product_title} className=" h-72 w-full object-cover mb-4 rounded-lg hover:scale-110 hover:-translate-y-1 transition" />
//             <h2 className="text-2xl font-bold mb-2">{product.product_title}</h2>
//             <p className="text-gray-700 mb-4">{product.description}</p>
//             <p className="text-gray-600 mb-4">Category: {product.category}</p>
//             <p className="text-gray-600 mb-4">Price: ${product.price}</p>
//             <p className="text-gray-600 mb-4">Brand: {product.brand}</p>
//             <p className="text-gray-600 mb-4 mr-5">Rating: {product.rating}
//                 <div className="rating ml-3">
//                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                     <input
//                         type="radio"
//                         name="rating-2"
//                         className="mask mask-star-2 bg-orange-400"
//                         defaultChecked />
//                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                     <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                 </div>
//             </p>
//             <p className="text-gray-600 mb-4">Warranty: {product.warranty}</p>
//             <p className="text-gray-600 mb-4">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>

//             <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
//             <ul className="list-disc list-inside text-gray-600">
//                 {product.Specification.map((spec, index) => (
//                     <li key={index}>{spec}</li>
//                 ))}
//             </ul>

//             <button
//                 onClick={onBack}
//                 className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg mr-3 hover:scale-110 hover:-translate-y-1 transition">
//                 Back to Product List
//             </button>
//             <div className='flex'>
//                 <button onClick={handleAddToCart}
//                     className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg flex hover:scale-110 hover:-translate-y-1 transition ">
//                     <HiShoppingCart className="text-xl cursor-pointer mr-3 " />
//                     Add to Cart
//                 </button>
//                 <button><FaHeart className="text-xl cursor-pointer ml-8 mt-4 hover:scale-110 hover:-translate-y-1 transition" /></button>
//             </div>

//         </div>
//     );
// };

// export default ProductDetails;
