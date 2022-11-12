import Item from "./Item"
import "./ItemListContainer.css"
import Item2 from "./Item"
function ItemListContainer() {
  return (
    <div >
      <h1>Mis productos</h1>
      <div className="listcontainer">
          
        <Item imgurl="/imgs/marinara.jpg" title="Marinara" price={700}  ingredientes="Salsa de tomate, ajo, oregano, albahaca, aceite de oliva." />
        
        <Item imgurl="/imgs/fugazzeta.jpg" title="Fugazzeta" price={800}  ingredientes="Salsa de tomate, mozzarella, cebolla." />

        <Item imgurl="/imgs/calabresa.jpg" title="Calabresa" price={900}  ingredientes="Salsa de tomate, mozzarella, cebolla." />

        <Item imgurl="/imgs/ruculaycrudo.jpg" title="Rucula y jamon crudo" price={950}  ingredientes="Salsa de tomate, mozzarella, rucula, jamon crudo, parmesano." />

        <Item imgurl="/imgs/baguette.jpg" title="Baguette" price={300}  ingredientes="" />

        <Item imgurl="/imgs/focaccia.jpg" title="Focaccia" price={650}  ingredientes="Tomates cherrys, aceitunas, romero." />

        <Item imgurl="/imgs/pandecampo.jpg" title="Pan de campo" price={400}  ingredientes="" />

        <Item imgurl="/imgs/aguamenu.jpg" title="Agua Villavicencio" price={200}  ingredientes="Agua sin gas." />

        <Item imgurl="/imgs/cocamenu.jpg" title="Coca Cola" price={250}  ingredientes="Gaseosa Coca Cola." />

        <Item imgurl="/imgs/spritemenu.jpg" title="Sprite" price={250}  ingredientes="Gaseosa Sprite." />
      </div>   
      </div>
     
  )
}

export default ItemListContainer