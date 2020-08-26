import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log('from cart',cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    
    if(total > 200){
        shipping = 0;
    }else if(total > 99) {
        shipping = 8.99;
    }else if(total > 0){
        shipping = 12.99;
    }

    let tax = parseFloat((total/12).toFixed(2));
    console.log(tax, typeof(tax));

    // toFixed() converts number to string so we need to convert again to a number formate
    // Calculate total with the tax and shipping cost
    let finalTotal = parseFloat((total + tax + shipping).toFixed(2));
    return(
        <div className="cart">
            <h1>Cart</h1>
            <p>Items Ordered: {cart.length}</p>
            <p>Shipping cost:{shipping} </p>
            <p>Tax + VAT : {tax}</p>
            <p>Total Price : {finalTotal}</p>
        </div>
    );
}

export default Cart;