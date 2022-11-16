import React from 'react'
import "./item.css"
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Link } from "react-router-dom";

function Item({ description,title, imgurl, price, id, }) {
    const urlDetail = `/detail/${id}`;
    return (
        <div className="card" >
            <ToggleButton icon="♥" />
            <div className="card-img">
                <img src={imgurl} alt={title} />
            </div>
            <div className="detalles">
                <div className="tittle-price">
                <h5 className="card-title">{title}</h5>
                    <p className="card-price">${price}</p>
                </div>
                <div className="botonlink">
                <Link className="botonmas" to={urlDetail}>
                    <MyButton >Ver más</MyButton>
                </Link>
            </div>
                </div>
        </div>


    )
}

export default Item