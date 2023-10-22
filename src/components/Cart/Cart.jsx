import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {

    const { cart, total, removeItem, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="cart cartEmpty">
                <h1 className="cartTitle">El carrito esta vacio</h1>
                <Link className="cartButton cartEmptyBack" to="/"> Volver </Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <h1 className="cartTitle">Resumen de pedido</h1>            
                <div className="cartResume">
                    <div className="columnTitle">Item</div>
                    <div className="columnTitle">Cantidad</div>
                    <div className="columnTitle">Precio Unitario</div>
                    <div className="columnTitle">Subtotal</div>
                    <div className="columnTitle">Eliminar</div>
                </div>
            {cart.map((product => (
                <div className="cartResume cartProductResume">
                    <div className="column">{product.name}</div>
                    <div className="column">{product.quantity}</div>
                    <div className="column">$ {product.price}</div>
                    <div className="column">$ {product.price * product.quantity}</div>
                    <div className="column">
                        <button className="cartButton" onClick={() => {removeItem(product.id)}}>X</button>
                    </div>
                </div>
            )))}
            <div className="cartTotal">Total: $ {total}</div>
            <button className="cartButton" onClick={clearCart}>Limpiar Carrito</button>
            <Link className=" cartButton" to="/checkout">Checkout</Link>
        </div>
    )
}

export default Cart;