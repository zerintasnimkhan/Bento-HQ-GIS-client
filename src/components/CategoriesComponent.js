// "use-client";
import React from "react";
import styles from "@/styles/categories.module.css";
import RestaurantIcon from "./RestaurantIcon";
import CustomerIcon from "./CustomerIcon";
import HubsIcon from "./HubsIcon";
import RiderIcon from "./RiderIcon";

function CategoriesComponent() {
  return (
    <div className={styles.ctg}>
      <RestaurantIcon />
      <CustomerIcon />
      <HubsIcon />
      <RiderIcon />
    </div>
  );
}

export default CategoriesComponent;
