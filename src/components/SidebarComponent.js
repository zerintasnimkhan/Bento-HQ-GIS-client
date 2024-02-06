"use-client";
import React from 'react';
import CategoriesComponent from './CategoriesComponent';
import styles from '../styles/sidebar.module.css'
import SearchComponent from './SearchComponent';
import SpecificationRestaurant from './SpecificationRestaurant';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
            <h2 style={{margin:"1rem"}}>Bento Headquarters</h2>
            <SearchComponent/>
      <CategoriesComponent/>
      <SpecificationRestaurant/>
    </div>
  );
};

export default Sidebar;
