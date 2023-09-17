import {useState} from "react";
import "./ItemCount.css";


const ItemCount = ({stock, initial, onAdd}) => {
    let [count, setCount] = useState(initial)
    
    const increment = () => {
        if (count < stock) {
            setCount( count = count +1);
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount( count = count -1);
        }
    } 
        
    return (
        <div className="counter">
            <div className="control">
                <button className="button buttonControl" onClick={decrement}>-</button>
                <p className="quantity">{count}</p>
                <button className="button buttonControl" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button buttonAddToCart" onClick={() => onAdd(count)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;