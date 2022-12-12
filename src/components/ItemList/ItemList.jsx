import React, { memo } from "react";
import Item from "./Item";
import "./ItemList.css";
function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            
          />
        );
      })}
    </div>
  );
}

export default memo(ItemList);