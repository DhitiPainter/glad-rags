import React from "react";
import { connect } from "react-redux";

import {
  removeItemFromCart,
  clearItemFromCart,
  addItemToCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
  const { id, imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(id)}>
          {" "}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(id)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (id) => dispatch(clearItemFromCart(id)),
  removeItem: (id) => dispatch(removeItemFromCart(id)),
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
