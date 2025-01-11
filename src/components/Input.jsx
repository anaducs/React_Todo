import React from "react";
import styles from "./Input.module.css";

function Input({
  type = "text",
  name,
  value,
  placeholder,
  onChange = () => {},
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className={styles.input}
    />
  );
}

export default Input;
