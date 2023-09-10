import CartIcon from "./CartIcon"
import CartItems from "./CartItems"

const CartWidget = () => {
    return (
        <div className="cartContainer">
            <CartIcon/>
            <CartItems count={5} />
        </div>     
        )
            
}






export default CartWidget;