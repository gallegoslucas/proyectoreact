

import "./MyButton.css";
import React, { useState } from "react";

function MyButton(props) {
    let [colorBtn, setColorBtn] = useState(props.colorBtn);

    return (
        <button
            className="vermas"
            onClick={props.onTouchButton}
            style={{ backgroundColor: colorBtn }}  
        >
            {props.children}
        </button>
    );
}

export default MyButton;
