// "use-client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import styles from "../styles/categories.module.css";
import RestaurantIcon from "./RestaurantIcon";
import CustomerIcon from "./CustomerIcon";
import HubsIcon from "./HubsIcon";
import RiderIcon from "./RiderIcon";


function CategoriesComponent() {

  const dispatch = useAppDispatch();
  function handleClick(type) {
    dispatch(updateType(type));
  }

  return (
    <div className={styles.ctg}>
      <RestaurantIcon handleClick={handleClick} />
      <CustomerIcon handleClick={handleClick} />
      <HubsIcon handleClick={handleClick} />
      <RiderIcon handleClick={handleClick} />
    </div>
  );
}

export default CategoriesComponent;
