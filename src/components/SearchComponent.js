"use-client";
import React from "react";
import styles from "../styles/search.module.css";

function SearchComponent() {
  return (
    <div>
      <div className={styles.fields}>
        <input
          className={styles.input}
          id="search"
          type="search"
          placeholder="Search for area..."
          list="search-suggestions"
          autocomplete="off"
        />
        {/* <img className={styles.searchIcon}
      src="https://res.cloudinary.com/dwrwwcvfb/image/upload/v1705826882/icons8-search-100_dlrokn.png">
      </img> */}

        <datalist id="search-suggestions">
          <option value="City of London" />
          <option value="Westminster" />
          <option value="Islington" />
          <option value="Victoria Park" />
          <option value="Hackney" />
          <option value="London Bridge" />
        </datalist>
      </div>
    </div>
  );
}

export default SearchComponent;
