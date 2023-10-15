import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.log("El articulo ya se encuentra en el carrito")
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
        <CartContext.Provider value={{addItem, removeItem, clearCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}
