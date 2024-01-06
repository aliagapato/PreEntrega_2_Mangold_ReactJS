const products = [
        {
            id: '1',
            name: "Guerrero Vikingo",
            price: 25000,
            description: "Cedro",
            stock: 5,
            img: '13_Detalle_1.jpg'
        },
        {
            id: '2',
            name: "Earl Vikingo",
            price: 10000,
            description: "Cedro",
            stock: 5,
            img: '1_Earl_Vikingo_1.jpg'
        },
        {
            id: '3',
            name: "Earl Vikingo II",
            price: 10000,
            description: "Cedro",
            stock: 5,
            img: '1_Earl_Vikingo_2.jpg'
        },
        {
            id: '4',
            name: "Hechicero",
            price: 12000,
            description: "Cedro",
            stock: 10,
            img: '2_Hechicero_1.jpg'
        },
        {
            id: '5',
            name: "Sabio",
            price: 8000,
            description: "Cedro",
            stock: 5,
            img: '3_Sabio_1.jpg'
        },
        {
            id: '6',
            name: "Guardia",
            price: 10000,
            description: "Cedro",
            stock: 5,
            img: '4_Guardia_1.jpg'
        },
        {
            id: '7',
            name: "Rey",
            price: 10000,
            description: "Fresno",
            stock: 5,
            img: '5_Rey_1.jpg'
        },
        {
            id: '8',
            name: "Reina",
            price: 10000,
            description: "Fresno",
            stock: 5,
            img: '6_Reina_1.jpg'
        },
        {
            id: '9',
            name: "Escudera",
            price: 12000,
            description: "Cedro",
            stock: 5,
            img: '7_Escudera_1.jpg'
        },
        {
            id: '10',
            name: "Caballero",
            price: 18000,
            description: "Fresno",
            stock: 5,
            img: '9_Caballero_1.jpg'
        },
        {
            id: '11',
            name: "Caballero II",
            price: 18000,
            description: "Fresno",
            stock: 5,
            img: '9_Caballero_2.jpg'
        },
        {
            id: '12',
            name: "Hechicero II",
            price: 12000,
            description: "Fresno",
            stock: 5,
            img: '2_Hechicero_2.jpg'
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