import React from 'react';
import {useState} from 'react';
// import {useState} from 'react'
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'

import fakeData from '../../fakeData/index';

const Shop = ()=> {
    const fakeData10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(fakeData10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return(
        <div className="shop">
            <div className="product-container">
               {
                   products.map(pd =>
                    <Product 
                        product={pd}
                        handleAddProduct = {handleAddProduct} 
                    />
                   )
                   
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
}

export default Shop;