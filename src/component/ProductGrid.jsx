import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const categories = ['All Products', 'Laptops', 'Phones', 'Accessories', 'Smart Watches', 'MacBook', 'iPhone'];

    useEffect(() => {
        setLoading(true);
        fetch('product.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    // Filter products based on the selected category
    const filteredProducts = selectedCategory === 'All Products'
        ? products
        : products.filter(product => product.category === selectedCategory);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products.</p>;

    return (
        <div className="flex mt-72">
            {/* Sidebar */}
            <div className="w-1/5 p-4">
                <ul className="space-y-4">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full py-2 px-4 rounded-full text-left ${selectedCategory === category ? 'bg-purple-500 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product Grid */}
            <div className="w-4/5 p-4">
                <h2 className="text-2xl font-bold text-center mb-4">Explore Cutting-Edge Gadgets</h2>
                {filteredProducts.length === 0 ? (
                    <p className="text-gray-600  text-2xl  ">No products found.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product.product_id} className="border rounded-lg p-4 bg-white">
                                <img src={product.product_image} alt={product.product_title} className="hover:scale-110 hover:-translate-y-1 transition h-48 w-full object-cover mb-4 rounded-lg" />
                                <h3 className="font-bold text-lg">{product.product_title}</h3>
                                <p className="text-gray-600">Price: ${product.price}</p>
                                <Link to={`/single-product/${product?.product_id}`}>
                                    <button className="hover:scale-110 hover:-translate-y-1 transition mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductGrid;
