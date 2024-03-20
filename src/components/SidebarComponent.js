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
import { useRouter } from "next/router";

const Sidebar = () => {
  const type = useSelector((state) => state.selectMap.type);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("access-token");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.sidebar}>
      <h2 style={{ margin: "1rem" }}>Bento Headquarters</h2>
      <SearchComponent />
      <CategoriesComponent />
      {type === "restaurant" && <SpecificationRestaurant />}
      {type === "customer" && <Customers />}
      {type === "hub" && <Hubs />}
      {type === "rider" && <Riders />}
      <button
      onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
