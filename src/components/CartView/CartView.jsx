import React, {useContext} from "react"
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import MyButton from "../MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import "./CartView.css"
import CartForm from "./CartForm";

function CartView() {
    const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
    let navigate = useNavigate();
    if (cart.length === 0) return <h1>Carrito Vacío</h1>;

    async function handleCheckout(evt, data) {  
        const order = {
            buyer: data,
            items: cart,
            total: priceInCart(),
            date: new Date(),
        } 
        const orderId = await createOrder(order);
        navigate(`/Finalizar/${orderId}`)
    }
    return (
    <div className="cart-contenedor">

        
        <div className="cart-container">
            <div className="cart-itemsList">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imgurl} alt={item.title} />
                        <h2>{item.title}</h2>
                        <h4>${(item.price)}</h4>
                        <h4>unidades: {item.count}</h4>
                        <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
                            X
                        </MyButton>
                    </div>
                ))}
            </div>    
                <MyButton onTouchButton={() => clear()}>Vaciar carrito</MyButton>
                <h1 className="totalcart">Total: $
                    {priceInCart()}</h1>
                <hr />
                <CartForm onSubmit={handleCheckout } />
            
        </div>
    </div>    
    );
}

export default CartView