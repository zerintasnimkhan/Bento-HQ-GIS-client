"use-client";
import React from "react";
import styles from "../styles/icons.module.css";

function RestaurantIcon({ handleClick, isSelected }) {
  return (
    <div
      className={`${styles.icon} ${isSelected ? styles.selectedIcon : ""}`}
      onClick={() => handleClick("restaurant")}
    >
      <img
        className={styles.icons}
        src="https://res.cloudinary.com/dwrwwcvfb/image/upload/v1708583836/restaurant_3_me8xdz.png"
      ></img>
    </div>
  );
}

export default RestaurantIcon;
