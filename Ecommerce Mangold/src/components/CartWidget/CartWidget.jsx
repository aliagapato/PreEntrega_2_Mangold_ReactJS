import React from 'react';
import cart from './assets/ShoppingCart.png';
import styles from './CartWidget.module.css';

const CartWidget = () => {
  return (
    <div className={styles['cart-widget-container']}>
      <div>
        <img src={cart} alt="cart-widget" className={styles['cart-image']} />
      </div>
      <div className={styles['text-container']}>
        <span>Productos</span>
        <div>0</div>
      </div>
    </div>
  );
};

export default CartWidget;
