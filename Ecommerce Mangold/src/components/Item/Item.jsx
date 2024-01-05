import './Item.module.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img>null</img>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <button className='Option'>Ver Detalles</button>
            </footer>
        </article>
    )
}

export default Item