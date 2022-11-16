import "./ItemDetail.css";

function ItemDetail({ product }) {
    return (
        // <div className="card-detail">
        //     <div className="card-detail_img">
        //         <img src={product.imgurl} alt="Product img" />
        //     </div>
        //     <div className="card-detail_detail">
        //         <h2>{product.title}</h2>
        //         <p>{product.description}</p>
        //         <h4 >$ {product.price}</h4>
        //     </div>
        //     {/* <ItemCount stock={product.stock}/> */}
        // </div>


        
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
            </div>
        </div>
    );
}

export default ItemDetail;