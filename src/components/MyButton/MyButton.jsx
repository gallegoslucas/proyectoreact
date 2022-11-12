import "./MyButton.css";
import React, { useState , useEffect } from "react";

function MyButton(props) {
    let [colorBtn, setColorBtn] = useState(props.color);

    console.log("render del com");
    useEffect(
        () => {
            
        
        },
    )
    

    function handleClick() {
        setColorBtn("grey");
    }


    return (
        <button
            onClick={handleClick}
            style={{ backgroundColor: colorBtn}}
            className="btn btn-primary"
            
        >
            {props.children}</button>
    );
}

export default MyButton

