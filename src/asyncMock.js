const products = [
    {
        id: 1,
        nombre: "Notebook Lenovo V14 G2 ITL",
        precio: 400000,
        categoria: "notebooks",
        imagen: "/images/products/Notebook Lenovo V14 G2 ITL.jpg",
        stock: 15,
        descripcion: "Notebook Lenovo V14 G2"
    },
    {
        id: 2,
        nombre: "Notebook Lenovo V15 G2 ITL",
        precio: 480000,
        categoria: "notebooks",
        imagen: "/images/products/Notebook Lenovo V15 G2 ITL.jpg",
        stock: 20,
        descripcion: "Notebook Lenovo V15 G2"
    },
    {
        id: 3,
        nombre: "Notebook Lenovo Yoga Slim 7",
        precio: 850000,
        categoria: "notebooks",
        imagen: "/images/products/Notebook Lenovo Yoga Slim 7.jpg",
        stock: 10,
        descripcion: "Notebook Yoga Slim 7"
    },
    {
        id: 4,
        nombre: "Impresora Epson Ecotank L3210 ",
        precio: 200000,
        categoria: "impresoras",
        imagen: "/images/products/Epson Ecotank L3210.jpg",
        stock: 30,
        descripcion: "Epson Ecotank L3210"
    },
    {
        id: 5,
        nombre: "Impresora Epson XP-2101",
        precio: 190000,
        categoria: "impresoras",
        imagen: "/images/products/Epson XP-2101.jpg",
        stock: 10,
        descripcion: "Impresora Epson XP-2101"
    },
    {
        id: 6,
        nombre: "Impresora Brother 1212W",
        precio: 250000,
        categoria: "impresoras",
        imagen: "/images/products/Impresora Brother 1212W.jpg",
        stock: 18,
        descripcion: "Impresora Brother 1212W"
    },
    {
        id: 7,
        nombre: "Impresora HP Laser 107A",
        precio: 210000,
        categoria: "impresoras",
        imagen: "/images/products/Impresora HP Laser 107a.jpg",
        stock: 40,
        descripcion: "Impresora HP Laser 107a"
    },
    {
        id: 8,
        nombre: "PC Intel Core I3",
        precio: 360000,
        categoria: "pc",
        imagen: "/images/products/PC Core I3.jpg",
        stock: 15,
        descripcion: "PC Core I3 / 8GB RAM / SSD 240GB"
    },
    {
        id: 9,
        nombre: "PC Intel Core I5",
        precio: 500000,
        categoria: "pc",
        imagen: "/images/products/PC Core I5.jpg",
        stock: 5,
        descripcion: "PC Core I5 / 16GB RAM / SSD 480GB"
    },
    {
        id: 10,
        nombre: "Monitor iQual IQ24H",
        precio: 85000,
        categoria: "monitores",
        imagen: "/images/products/Monitor iQual IQ24H.jpg",
        stock: 15,
        descripcion: "Monitor iQual 24'"
    },
    {
        id: 11,
        nombre: "Monitor Samsung F22T350FHL",
        precio: 95000,
        categoria: "monitores",
        imagen: "/images/products/Monitor Samsung F22T350FHL.jpg",
        stock: 20,
        descripcion: "Monitor Samsung 22'"
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

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.categoria === productCategory))
        }, 2000)
    })
}