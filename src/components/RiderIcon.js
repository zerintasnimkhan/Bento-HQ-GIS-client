"use-client";
import React from "react";
import styles from "../styles/icons.module.css";

function RiderIcon({ handleClick, isSelected  }) {
  return (
    <div 
    className={`${styles.icon} ${isSelected ? styles.selectedIcon : ""}`}
    onClick={() => handleClick("rider")}>
      <img
        className={styles.icons}
        src="https://res.cloudinary.com/dwrwwcvfb/image/upload/v1708583837/delivery_ltpejd.png"
      ></img>
    </div>
  );
}

export default RiderIcon;
