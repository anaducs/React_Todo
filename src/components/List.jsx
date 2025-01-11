import React from "react";
import styles from "./List.module.css";

function List({ list, heading, onclick }) {
  return (
    <>
      <h1>{heading}</h1>
      <ul>
        {list.map((elem, index) => {
          return (
            <li key={index} onClick={onclick} name={elem}>
              {elem}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
