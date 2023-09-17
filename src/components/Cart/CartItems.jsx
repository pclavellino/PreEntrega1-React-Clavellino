import "./Cart.css";

const CartItems = ({count = 0}) => {
    return (
        <div className="cartItems" >
            <div>
            {count}
            </div>
        </div>
    )
}


export default CartItems;