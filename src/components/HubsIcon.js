"use-client";
import React from "react";
import styles from "../styles/icons.module.css";

function HubsIcon({ handleClick, isSelected }) {
  return (
    <div 
    className={`${styles.icon} ${isSelected ? styles.selectedIcon : ""}`}
    onClick={() => handleClick("hub")}>
      <img
        className={styles.icons}
        src="https://res.cloudinary.com/dwrwwcvfb/image/upload/v1707139129/network_si7bxy.png"
      ></img>
    </div>
  );
}

export default HubsIcon;
