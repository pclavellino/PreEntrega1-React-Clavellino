import { useGetProductById } from "../../hooks/useGetProductById";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const { product, isLoading } = useGetProductById(1);

    if (isLoading) {
        return (
            <h1>Cargando...</h1>
        )
    }

    if (product.length === 0) {
        return (
            <h1>No se encontraron productos</h1>
        )
    }

    return (
        <div>
            <ItemDetail { ...product }/>
        </div>        
    )

}

export default ItemDetailContainer;