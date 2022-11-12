import React from 'react'
import "./item.css"
import MyButton from "../MyButton/MyButton";
import _default from '@popperjs/core/lib/modifiers/popperOffsets';


function Item(props) {
    return (
        <div className="card" >
            <div className="card-img">
                <img src={props.imgurl} alt={props.title} />
            </div>
            <div className="detalles">
                <div className="tittle-price">
                <h5 className="card-title">{props.title}</h5>
                    <p className="card-price">${props.price}</p>
                </div>
                <p className="card-text">{props.ingredientes}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>


    )
}

export default Item