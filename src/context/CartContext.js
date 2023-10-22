import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const precioTotal = cart.reduce((acumulador, producto) => acumulador + (producto.price * producto.quantity), 0)
        setTotal(precioTotal)
    }, [cart])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }        
    }

    const removeItem = (id) => {
        const newCart = cart.filter(element => element.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(element => element.id === id)
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clearCart, isInCart, cart, total}}>
            {children}
        </CartContext.Provider>
    )
}
