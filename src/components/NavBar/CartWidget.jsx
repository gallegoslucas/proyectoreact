import React, { useContext } from "react";

import { cartContext } from "../../context/cartContext";


function CartWidget() {
  const miContext = useContext(cartContext);
 
  return (
    <>
      <img className="carro" src="/imgs/carro.png" alt="" />

    
      <span>{miContext.itemsInCart()}</span>
    </>
  );
}

export default CartWidget