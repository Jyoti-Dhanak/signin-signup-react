import React from "react";
import Picture from "../Assets/bg.png";

export default function Imagesection() {
    return (
        <div className="illustration">
            <img src={Picture} alt="Illustration" />
            <div className="illustration-content">
                <h3>Sign in to name <br /><span className="text">Lorem Ipsum is Simply</span></h3>
            </div>
        </div>
    );
}