import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    return (
        <div className="itemDetailContainer">
            <ItemDetail itemId={itemId}/>
        </div>        
    )

}

export default ItemDetailContainer;