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
    <div className="container mt-5">
      <div className="row"> 
        <div className='col-12 text-center mb-5'>
          <h1 className={styles.mensaje}>{greeting}</h1>
        </div>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
