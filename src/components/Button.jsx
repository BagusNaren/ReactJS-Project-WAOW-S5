import React from "react";
import "../styles/Button.css";

function Button({ label, onClick, type = "button" }) {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;