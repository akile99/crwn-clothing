import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <div className="quantity">
      <span>- </span>
      <span>{quantity} </span>
      <span>+</span>
    </div>
    <span className="price">${price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
