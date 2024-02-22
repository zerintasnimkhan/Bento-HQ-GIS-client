"use-client";
import React from "react";
import styles from "../styles/icons.module.css";

function CustomerIcon({ handleClick, isSelected }) {
  return (
    <div
      className={`${styles.icon} ${isSelected ? styles.selectedIcon : ""}`}
      onClick={() => handleClick("customer")}
    >
      <img
        className={styles.icons}
        src="https://res.cloudinary.com/dwrwwcvfb/image/upload/v1708583836/user_1_wwdqqs.png"
      ></img>
    </div>
  );
}

export default CustomerIcon;
