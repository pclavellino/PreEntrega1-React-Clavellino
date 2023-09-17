import CartIcon from "./CartIcon"
import CartItems from "./CartItems"
import "./Cart.css";


const CartWidget = () => {
    return (
        <div className="cartContainer">
            <CartIcon/>
            <CartItems count={5} />
        </div>     
        )
            
}

export default CartWidget;