import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import Layout from '../components/layout';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleOrder = () => {
    clearCart();
    alert('注文が送信されました');
  };

  return (
    <Layout>
      <h1>カートページ</h1>
      {cart.length === 0 ? (
        <p>カートは空です。</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <span>{item.name}: {item.quantity}匹</span>
              <button onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}>-</button>
              <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(index)}>削除</button>
            </div>
          ))}
          <button onClick={handleOrder}>注文を決定する</button>
        </>
      )}
    </Layout>
  );
};

export default CartPage;
