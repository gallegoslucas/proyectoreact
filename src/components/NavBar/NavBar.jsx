import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        
        <div >
           
            <div className="barra">
                <div className="titulos">
                    <Link className="titulolink" to="/">
                    <h1 className="titulo-menu" >CORNICIONE</h1>
                    </Link>
                    <Link className="subtitulolink" to="/">
                    <h2 className="subtitulo-menu" >PIZZAS & PANIFICADOS</h2>
                    </Link>
                </div>
                <div className="barramenu-menu">
                    <span>
                        <Link to="/">Inicio</Link>
                    </span>
                    <span>
                        <Link to="/category/Pizzas">Pizzas</Link>
                    </span>
                    <span>
                        <Link to="/category/Panes">Panes</Link>
                    </span>
                    <span>
                        <Link to="/category/Bebidas">Bebidas</Link>
                    </span>
                    <span>
                        <Link to="/"> <CartWidget /></Link>
                    </span>
                    
                </div>
            </div>  
            

        
        </div>         
  )
}

export default Navbar