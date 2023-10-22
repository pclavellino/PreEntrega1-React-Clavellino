import { useState } from "react";
import "./Checkout.css"

const CheckoutForm = ( {createOrder} ) => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailCheck, setEmailCheck] = useState("")
    const [mailError, setMailError] = useState(false)

    const handleConfirm = (event) => {

        event.preventDefault()

        if (email !== emailCheck) {
            setMailError(true)
        } else {
            const user = {
                name, surname, phone, email
            }
        
            createOrder(user)
        }
        
    }

    return (
        <div className="checkOutContainer">
            <form onSubmit={handleConfirm} className="checkOutForm">
                <label>Nombre:
                    <input type="text" value={name} onChange={({target}) => setName(target.value)} required></input>
                </label>
                <label>Apellido:
                    <input type="text" value={surname} onChange={({target}) => setSurname(target.value)} required></input>
                </label> 
                <label>Teléfono:
                    <input type="text" value={phone} onChange={({target}) => setPhone(target.value)} required></input>
                </label>
                <label>Dirección de Email:
                    <input type="email" value={email} onChange={({target}) => setEmail(target.value)} required></input>
                </label>
                <label>Vuelva a ingresar su Dirección de Email:
                    <input type="email" value={emailCheck} onChange={({target}) => setEmailCheck(target.value)} required></input>
                </label>
                {mailError && <p className="mailError">Las direcciones de mail no coinciden. Intentelo nuevamente.</p>}
                <button type="submit" className="checkOutButton">Realizar Compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm;