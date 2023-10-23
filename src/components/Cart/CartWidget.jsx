import CartIcon from "./CartIcon"
import CartItems from "./CartItems"
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";


const CartWidget = () => {

    const { cart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const cantidadTotal = cart.reduce((acumulador, producto) => acumulador + producto.quantity, 0)
        setQuantity(cantidadTotal)
    }, [cart])

    return (
        <Link className="cartContainer" to="/cart">
            <CartIcon/>
            <CartItems count={quantity} />
        </Link>     
        ) 
}

export default CartWidget;