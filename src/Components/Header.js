// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h2 className="logo">🛒 E-Commerce</h2>
      <nav>
        <a href="/">HOME</a>
        <a href="/products">PRODUCTS</a>
        <a href="/cart">CART</a>
      </nav>
      <h2 className="cart-icon">🛒</h2>
    </header>
  );
};

export default Header;