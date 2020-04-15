import React from "react";
import "../styles/Item.css";

const Item = ({ title, body, image }) => {
    return (
        <div className="item__box">
            <div className="item">
                <div className="item__text">
                    <h2 className="item__title">{title}</h2>
                    <p className="item__body">{body}</p>
                </div>
                <img className="item__cover" src={image} alt="cover_img" />
            </div>
        </div>
    );
};

export default Item;
