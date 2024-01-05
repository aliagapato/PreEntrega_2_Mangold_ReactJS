import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock.js'
import ItemList from '../ItemList/ItemList.jsx'; 
import styles from './ItemListContainer.module.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  
  return (
    <div>
      <h1 className={styles.mensaje}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
