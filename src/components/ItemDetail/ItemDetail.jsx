import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState} from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

function ItemDetail({ product }) {
    const [isInCart, setIsInCart]=useState(false)
    const {addToCart} = useContext(cartContext) 
    

    function onAddToCart(count) {
        swal({
            title: "Felicitaciones!",
            text: `Agregaste ${count} items al carrito!`,
            icon: "success",
            button: "Continuar",
        });

        setIsInCart(count);
        addToCart(product, count);

    }

    
    return (
       
        <div className="cartadetalle" >
        
            <div className="card " >
           
            <div className="card-img">
                <img src={product.imgurl} alt={product.title} />
            </div>
            <div className="detalles">
                <div className="tittle-price">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-price">${product.price}</p>
                </div>
                <p className="card-text">{product.description}</p>
                </div>
                <div>
                    
                    {isInCart ?
                        <Link to="/Cart">
                            <MyButton colorBtn="#8b863a">Ir al carrito</MyButton>
                        </Link>
                        :
                    <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;