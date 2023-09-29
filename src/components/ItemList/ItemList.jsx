import Item from "../Items/Item";
import { useGetProducts } from "../../hooks/useGetProducts";
import "./ItemList.css";

const ItemList = ({productCategory}) => {

    const {products, isLoading} = useGetProducts(productCategory);

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