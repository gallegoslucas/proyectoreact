import { useState, useEffect} from "react";
import Item from "./Item";

import  { getItemsByCategory, getItemsOrdered } from "../../Services/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../loader/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { idCategory } = useParams();

  const loader = <h3>Cargando . . .</h3>;

  async function getItemsAsync() {

    if (!idCategory) {
      let respuesta = await getItemsOrdered();
      setProducts(respuesta);
    } else {
      let respuesta = await getItemsByCategory(idCategory)
      setProducts(respuesta)
    }
    
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return <>{products ? <ItemList products={products} /> : <Loader/> }</>;
}

export default ItemListContainer;