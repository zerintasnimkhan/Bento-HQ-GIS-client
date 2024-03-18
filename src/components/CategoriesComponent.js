import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addSpecification,
  filterMarkers,
  updateType,
} from "../features/selectMap/selectMap-slice";
import styles from "../styles/categories.module.css";
import RestaurantIcon from "./RestaurantIcon";
import CustomerIcon from "./CustomerIcon";
import HubsIcon from "./HubsIcon";
import RiderIcon from "./RiderIcon";

function CategoriesComponent() {
  const dispatch = useAppDispatch();
  const selectedType = useAppSelector((state) => state.selectMap.type);

  const handleClick = (type) => {
    dispatch(updateType(type));
    dispatch(filterMarkers());
  };

  return (
    <div className={styles.ctg}>
      <RestaurantIcon
        handleClick={handleClick}
        isSelected={selectedType === "restaurant"}
      />
      <CustomerIcon
        handleClick={handleClick}
        isSelected={selectedType === "customer"}
      />
      <HubsIcon handleClick={handleClick} isSelected={selectedType === "hub"} />
      <RiderIcon
        handleClick={handleClick}
        isSelected={selectedType === "rider"}
      />
    </div>
  );
}

export default CategoriesComponent;
