import React from "react";
import styles from "./Button.module.css"

function Button({ name, type = "button", onClick = () => {},value='click'}) {
  return <button name={name} type={type} onClick={onClick}>{value}</button>;
}

export default Button;
