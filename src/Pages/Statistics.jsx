import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    // Sample data for the chart
    const data = [
        { name: "Laptop Pro 15", Price: 1199.99, Rating: 94, Total: 100 },
        { name: "Gadget X", Price: 899.99, Rating: 88, Total: 90 },
        { name: "Smart Watch Z", Price: 499.99, Rating: 92, Total: 95 },
    ];

    useEffect(() => {
        document.title = "Gadget Heaven || Statistics";
    }, []);

    return (
        <div>
            <div className="bg-purple-600 text-center py-10 h-[10%] text-white">
                {/* Container for Title, Subtitle */}
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Statistics
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            {/* Chart div */}
            <div className="p-6 bg-gray-100 rounded-lg mt-6 w-[50%] m-auto">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Price" fill="#8884d8" />
                        <Bar dataKey="Rating" fill="#ff4d4d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
