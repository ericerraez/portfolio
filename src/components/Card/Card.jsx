import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
    return (
        <div className="card" style={{borderColor: color}}> {/* Corrected borderColor syntax */}
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <a href="https://github.com/ericerraez?tab=repositories" target="_blank" rel="noopener noreferrer">
                <button className="c-button">MORE</button>
            </a>
        </div>
    );
};

export default Card;
