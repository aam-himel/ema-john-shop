import React from 'react';
import logo from '../../images/logo.png';

import './Header.css';

const Header = () => {
    return(
        <div className="header" >
            <img src={logo} alt="logo"className="logo" />
            <nav>
                <a href="/home">home</a>
                <a href="/shop">shop</a>
                <a href="/product">product</a>
                <a href="/cart">cart</a>
            </nav>
        </div>
    );
}

export default Header;