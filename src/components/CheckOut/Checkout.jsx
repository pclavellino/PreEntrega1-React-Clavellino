import CheckoutForm from "./CheckoutForm";
import Loading from "../Loading/Loading";
import { CartContext } from "../../context/CartContext";
import { useState, useContext } from "react";
import { Timestamp, getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {

    const { cart, total, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const createOrder = ( {name, surname, phone, email} ) => {

        setIsLoading(true);

        const order = {
            buyer : {
                name, surname, phone, email
            },
            items : cart,
            date : Timestamp.fromDate(new Date()),
            state: "Generada",
            total : total,
        }

        const db = getFirestore()

        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({id}) => setOrderId(id))
        .then(() => setIsLoading(false))

        clearCart()
    }

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    if (orderId) {
        return (
            <div className="checkOutContainer">
                <h1>Su número de órden es:</h1>
                <div className="orderNumber">{orderId}</div>
                <Link className="checkOutButton" to="/">Volver al inicio</Link>
            </div>
            
        )
    }

    return (
        <CheckoutForm createOrder={createOrder}/>
    )
        
}

export default Checkout;