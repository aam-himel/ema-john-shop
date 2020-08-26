import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, shipping, stock, seller} = props.product;
    const {handleAddProduct} = props;

    return(
        <div className="product">
           <div className="product-img">
               <img src={img} alt=""/>
           </div>
           
           <div className="product-info ">
               <h4>{name}</h4>
               <br />
                <p><small>by:   {seller}</small></p>
                <p>$ <b>{price}</b></p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="add-cart-btn" onClick={() => handleAddProduct(props.product)} >Add to cart</button>
           </div>
        </div>
    );
}

export default Product;