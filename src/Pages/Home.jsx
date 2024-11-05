import React from 'react';
import Banner from '../component/Banner';
import ProductGrid from '../component/ProductGrid';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const catagories = useLoaderData()
    console.log(catagories)

    return (
        <div>
           <Banner></Banner>
           <ProductGrid catagories={catagories} ></ProductGrid>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;