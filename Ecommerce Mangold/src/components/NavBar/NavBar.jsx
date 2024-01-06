import CartWidget from '../CartWidget/CartWidget';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg text-center" style={{"backgroundColor": "#1C1C1C"}}>
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col col-12 col-lg-2">
            <img src="../img/Logo VM Woodworking_1.png" alt="Logo" className={styles.logo} />
          </div>
          <div className="col col-12 col-lg-8">
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12 px-5'>
                  <h3 className={styles.title}>VM Woodworking</h3>
                </div>
                <div className='col-12 mt-5'>      
                  <div className='container-fluid'>
                    <div className='row justify-content-space-between'>
                      <div className='col col-3'>
                        <button className="btn btn-dark rounded-pill">Inicio</button>
                      </div>
                      <div className='col col-2'>
                        <button className="btn btn-dark rounded-pill">Galeria</button>
                      </div>
                      <div className='col col-2'>
                        <button className="btn btn-dark rounded-pill">Autor</button>
                      </div>
                      <div className='col col-2'>
                        <button className="btn btn-dark rounded-pill">Influencias</button>
                      </div>
                      <div className='col col-2'>
                        <button className="btn btn-dark rounded-pill">Contacto</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-2">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
