import React, { useState, useContext } from 'react';
import { useCart } from '../context/CartContext';
import Layout from '../components/layout';

const IndexPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name: 'さんま', quantity });
    setQuantity(1);
  };

  return (
    <Layout>
      <h1>商品ページ</h1>
      <p>さんまの数量を選択してください：</p>
      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={handleAddToCart}>カートに入れる</button>
    </Layout>
  );
};

export default IndexPage;
