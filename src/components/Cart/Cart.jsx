import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const precioTotal = cart.reduce((acumulador, producto) => acumulador + (producto.precio * producto.quantity), 0)
        setTotal(precioTotal)
    }, [cart])

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
                <div className="cartResume">
                    <div className="column">{product.nombre}</div>
                    <div className="column">{product.quantity}</div>
                    <div className="column">$ {product.precio}</div>
                    <div className="column">$ {product.precio * product.quantity}</div>
                    <div className="column">
                        <button className="cartButton buttonRemoveItem" onClick={() => {removeItem(product.id)}}>X</button>
                    </div>
                </div>
            )))}
            <div className="cartTotal">Total: $ {total}</div>
            <button className="cartButton buttonClearCart" onClick={clearCart}>Limpiar Carrito</button>
            <button className=" cartButton buttonPay">Pagar</button>
        </div>
    )
}

export default Cart;