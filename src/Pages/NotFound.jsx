// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 text-center">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-purple-600 text-white rounded-md text-lg font-medium hover:bg-purple-700 transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
