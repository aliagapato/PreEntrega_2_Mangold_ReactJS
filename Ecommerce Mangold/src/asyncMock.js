const products = [
        {
            id: '1',
            name: "Guerrero Vikingo",
            price: 25000,
            description: "Cedro",
            stock: 5,
            img: 'null'
        },
        {
            id: '2',
            name: "Earl Vikingo",
            price: 10000,
            description: "Cedro",
            stock: 5,
            img: 'null'
        },
        {
            id: '3',
            name: "Earl Vikingo II",
            price: 10000,
            description: "Cedro",
            stock: 5,
            img: 'null'
        },
        {
            id: '4',
            name: "Hechicero",
            price: 12000,
            description: "Cedro",
            stock: 10,
            img: 'null'
        },
        {
            id: '5',
            name: "Sabio",
            price: 8000,
            description: "Cedro",
            stock: 5,
            img: 'null'
        },
        {
            id: '6',
            name: "Guardia",
            price: 10000,
            description: "Cedro",
            stock: 5,
            img: 'null'
        },
        {
            id: '7',
            name: "Rey",
            price: 10000,
            description: "Fresno",
            stock: 5,
            img: 'null'
        },
        {
            id: '8',
            name: "Reina",
            price: 10000,
            description: "Fresno",
            stock: 5,
            img: 'null'
        },
        {
            id: '9',
            name: "Escudera",
            price: 12000,
            description: "Cedro",
            stock: 5,
            img: 'null'
        },
        {
            id: 10,
            name: "Caballero",
            price: 18000,
            description: "Fresno",
            stock: 5,
            img: 'null'
        },
        {
            id: '11',
            name: "Caballero II",
            price: 18000,
            description: "Fresno",
            stock: 5,
            img: 'null'
        },
        {
            id: '12',
            name: "Hechicero II",
            price: 12000,
            description: "Fresno",
            stock: 5,
            img: 'null'
        }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}