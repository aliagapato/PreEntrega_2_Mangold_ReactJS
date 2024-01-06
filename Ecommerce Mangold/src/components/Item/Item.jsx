import './Item.module.css';
import { getProductsById } from '../../asyncMock' 
const Item = ({ id, name, img, price, stock }) => {

    const handleVerDetalles = async () => {
        try {
            const productDetails = await getProductsById(id);
            console.log('Detalles del producto:', productDetails);
        } catch (error) {
            console.error('Error al obtener detalles del producto:', error);
        }
    };

    return (
        <div className='col col-12 col-lg-3 mb-5 text-center p-5'>
            <article className='CardItem'>
                <header className='Header'>
                    <h2 className='ItemHeader'>{name}</h2>
                </header>
                <picture>
                    <img src={`../../${img}`} alt={name} />
                </picture>
                <section>
                    <p className='Info'>Precio: ${price}</p>
                    <p className='Info'>Stock: {stock}</p>
                </section>
                <footer className='ItemFooter'>
                    <button className='Option' onClick={handleVerDetalles}>
                        Ver Detalles
                    </button>
                </footer>
            </article>
        </div>
    );
};

export default Item;
