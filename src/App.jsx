// src/App.js
import React from 'react';
import { CartProvider } from './component/CartContext';
import ProductGrid from './component/ProductGrid';
// import Dashborad from './Pages/Dashborad';
// import ProductDetails from './component/ProductDetails';

function App() {
    return (
        <CartProvider>
            <ProductGrid></ProductGrid>
            {/* <Dashborad></Dashborad>
            <ProductDetails></ProductDetails> */}
        </CartProvider>
       
    );
}

export default App;
