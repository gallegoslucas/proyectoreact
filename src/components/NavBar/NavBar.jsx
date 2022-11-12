import CartWidget from "./CartWidget"
import "./NavBar.css"


function Navbar() {
    return (
        
        <div >
           
            <div className="barra">
                <div className="titulos">
                    <h1 className="titulo-menu" >CORNICIONE</h1>
                    <h2 className="subtitulo-menu" animate__pulse>PIZZAS & PANIFICADOS</h2>
                </div>
                <div className="barramenu-menu">
                    <span><a href="#">Inicio</a></span>
                    <span><a href="#">Pizzas</a></span>
                    <span><a href="#">Panes</a></span>
                    <span><a href="#">Bebidas</a></span>
                    <span><a href="#">🛒</a></span>
                    
                </div>
            </div>  
            

           


        </div>         
  )
}

export default Navbar