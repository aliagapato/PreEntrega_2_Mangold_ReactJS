import React from 'react';
import styles from './ItemListContainer.module.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className={styles.mensaje}>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
