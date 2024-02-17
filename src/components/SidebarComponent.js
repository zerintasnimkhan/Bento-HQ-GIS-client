"use-client";
import React from "react";
import { useSelector } from "react-redux";
import CategoriesComponent from "./CategoriesComponent";
import styles from "../styles/sidebar.module.css";
import SearchComponent from "./SearchComponent";
import SpecificationRestaurant from "./SpecificationRestaurant";
import Customers from "./specifications/Customers";
import Hubs from "./specifications/Hubs";
import Riders from "./specifications/Riders";

const Sidebar = () => {
  const type = useSelector((state) => state.selectMap.type);
  return (
    <div className={styles.sidebar}>
      <h2 style={{ margin: "1rem" }}>Bento Headquarters</h2>
      <SearchComponent />
      <CategoriesComponent />
      {type === "restaurant" && <SpecificationRestaurant />}
      {type === "customer" && <Customers />}
      {type === "hub" && <Hubs />}
      {type === "rider" && <Riders />}
    </div>
  );
};

export default Sidebar;
