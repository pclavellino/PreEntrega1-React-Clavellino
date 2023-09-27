const products = [
    {
        id: 1,
        nombre: "Notebook Lenovo V14 G2 ITL",
        precio: 400000,
        categoria: "Notebook",
        imagen: "/images/products/Notebook Lenovo V14 G2 ITL.jpg",
        stock: 15,
        descripcion: "Notebook Lenovo V14 G2"
    },
    {
        id: 2,
        nombre: "Notebook Lenovo V15 G2 ITL",
        precio: 480000,
        categoria: "Notebook",
        imagen: "/images/products/Notebook Lenovo V15 G2 ITL.jpg",
        stock: 20,
        descripcion: "Notebook Lenovo V15 G2"
    },
    {
        id: 3,
        nombre: "Notebook Lenovo Yoga Slim 7",
        precio: 850000,
        categoria: "Notebook",
        imagen: "/images/products/Notebook Lenovo Yoga Slim 7.jpg",
        stock: 10,
        descripcion: "Notebook Yoga Slim 7"
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === productId))
        }, 2000)
    })
}