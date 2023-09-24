import Item from "./Item";
import { useState, useEffect } from "react";
import "./Items.css";

const ItemList = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            setTimeout(()=> {
                fetch("products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .finally(() => setIsLoading(false));
            }, 2000)       
    },[])


    if (isLoading) {
        return (
            <h1>Cargando...</h1>
        )
    }

    if (products.length === 0) {
        return (
            <h1>No se encontraron productos</h1>
        )
    }

    return (
        <div className="ItemList">
            {products.map((product => (
                <Item key={product.id} nombre={product.nombre} imagen= {product.imagen} precio={product.precio} descripcion={product.descripcion} />
            )))}
        </div>
    )
}


export default ItemList;