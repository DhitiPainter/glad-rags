import React from "react";
import { connect } from "react-redux";

import Button from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <Button>CHECKOUT</Button>
  </div>
);

const matStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(matStateToProps)(CartDropdown);
