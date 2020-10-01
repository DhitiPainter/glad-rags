import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, googleButton, inverted, ...props }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      googleButton ? "google-sign-in" : ""
    } custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
