import React from "react";
import { useParams } from "react-router-dom";
import "./finalizar.css"
import MyButton from "../MyButton/MyButton";

function Finalizar() {
  const idOrder = useParams().idOrder;

  return (
    <div className="gracias" >
      <h1 >Gracias por tu compra !</h1>
      <h3>
        El id de tu compra es: <strong>{idOrder}</strong>
      </h3>
      <a href="/"><MyButton >Volver al menu</MyButton></a>
      
    </div>
  );
}
export default Finalizar