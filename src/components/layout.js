import React from 'react';
import { Link } from 'gatsby';
import { CartProvider } from '../context/CartContext';

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <div>
        <nav>
          <Link to="/">商品ページ</Link> | <Link to="/cart">カートページ</Link>
        </nav>
        {children}
      </div>
    </CartProvider>
  );
};

export default Layout;
