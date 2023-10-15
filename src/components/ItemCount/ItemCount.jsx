import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial = 1, onAdd}) => {
    let [count, setCount] = useState(initial)
    
    const increment = () => {
        if (count < stock) {
            setCount( count = count +1);
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount( count = count -1);
        }
    } 
        
    return (
        <div className="counter">
            <div className="control">
                <button className="boton botonControl" onClick={decrement}>-</button>
                <p className="quantity">{count}</p>
                <button className="boton botonControl" onClick={increment}>+</button>
            </div>
            <div>
                <button className="boton botonAgregarCarrito" onClick={() => onAdd(count)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;