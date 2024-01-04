import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav className={`${styles.navbar} ${styles.navbarFixed}`}>
      <div className={styles.brandContainer}>
        <img src="../img/Logo VM Woodworking_1.png" alt="Logo" className={styles.logo} />
        <h3 className={styles.title}>VM Woodworking</h3>
        <CartWidget />
      </div>

      <div className={styles.buttonWrapper}>
        <div className={styles.buttonContainer}>
          <button className="btn btn-dark rounded-pill">Inicio</button>
          <button className="btn btn-dark rounded-pill">Galeria</button>
          <button className="btn btn-dark rounded-pill">Autor</button>
          <button className="btn btn-dark rounded-pill">Influencias</button>
          <button className="btn btn-dark rounded-pill">Contacto</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
