import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";


const ItemListContainer = () => {

    const { categoryId } = useParams()

    return (    
        <div className="ItemListContainer">
            <ItemList productCategory={categoryId}/>
        </div>
    )
}

export default ItemListContainer;