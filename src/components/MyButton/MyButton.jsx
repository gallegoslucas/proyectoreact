import "./MyButton.css";
import React, { useState } from "react";

function MyButton(props) {
   

    return (
        
        <button
            
        className="vermas"
        >
            {props.children}
        </button>
    );
}

export default MyButton;

