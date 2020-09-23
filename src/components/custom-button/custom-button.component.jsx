import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, googleButton, ...props }) => (
  <button
    className={`${googleButton ? "google-sign-in" : ""} custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
