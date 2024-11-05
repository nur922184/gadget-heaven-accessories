import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ProductGrid = () => {
    const { categoryName } = useParams(); // Get the category from the URL

    const navigate = useNavigate(); // To programmatically navigate on button click

    const [products, setProducts] = useState([]);
    const categories = ['All Products', 'Laptops', 'Phones', 'Accessories', 'Smart Watches', 'MacBook', 'iPhone'];

    useEffect(() => {
        // Fetch data from API when the component mounts
        fetch('product.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Filter products based on the current category from the URL
    const filteredProducts = categoryName === 'All Products' || !categoryName
        ? products
        : products.filter(product => product.category === categoryName);

    return (
        <div className="flex mt-72">
            {/* Sidebar */}
            <div className="w-1/5 p-4">
                <ul className="space-y-4">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link
                                to={category === 'All Products' ? '/' : `/category/${category}`}
                                className={` w-full py-2 px-4 rounded-lg text-left ${categoryName === category ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product Grid */}
            <div className="w-4/5 p-4">
                <h2 className="text-2xl font-bold mb-4">Explore Cutting-Edge Gadgets</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.product_id} className="border rounded-lg p-4 bg-white">
                            <img src={product.product_image} alt={product.product_title} className="hover:scale-110 hover:-translate-y-1 transition h-48 w-full object-cover mb-4 rounded-lg" />
                            <h3 className="font-bold text-lg">{product.product_title}</h3>
                            <p className="text-gray-600">Price: ${product.price}</p>
                            <button className="hover:scale-110 hover:-translate-y-1 transition mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg">View Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
