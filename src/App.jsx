import React from 'react';
import ProductDetails from '../component/ProductDetails';
import Dashborad from '../Pages/Dashborad';
import { CartProvider } from '../CartContext';


function App() {
    return (
        <CartProvider>
            <ProductDetails></ProductDetails>
            <Dashborad></Dashborad>
        </CartProvider>
        // <CartProvider>
        //     <ProductDetails />
        //     <Dashboard />
        // </CartProvider>
    );
}

export default App;
