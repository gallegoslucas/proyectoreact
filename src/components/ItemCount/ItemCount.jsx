import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import "./ItemCount.css"
function ItemCount({ stock, onAddToCart }) {
    const [count, setCount] = useState(1);

    function handleAdd() {
        if (count < stock) setCount(count + 1);
    }

    function handleSubstract() {
        if (count > 1) setCount(count - 1);
    }

    return (
        <div className="itemcount_container">
            <div className="itemcount_control">
                <MyButton colorBtn="#8b863a" onTouchButton={handleSubstract}>
                    -
                </MyButton>
                <span className="contador">{count}</span>
                <MyButton colorBtn="#8b863a" onTouchButton={handleAdd}>
                    +
                </MyButton>
            </div>
            <div className="itemcount_btns">
              
                <MyButton colorBtn="#8b863a" onTouchButton={() => onAddToCart(count)}>
                    Agregar al carrito
                </MyButton>
            </div>
        </div>
    );
}

export default ItemCount;