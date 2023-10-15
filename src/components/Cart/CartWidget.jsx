import CartIcon from "./CartIcon"
import CartItems from "./CartItems"
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import "./Cart.css";

const CartWidget = () => {

    const { cart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const cantidadTotal = cart.reduce((acumulador, producto) => acumulador + producto.quantity, 0)
        setQuantity(cantidadTotal)
    }, [cart])

    if (cart.length > 0) {
        return (
            <div className="cartContainer">
                <CartIcon/>
                <CartItems count={quantity} />
            </div>     
            )
    }
}

export default CartWidget;