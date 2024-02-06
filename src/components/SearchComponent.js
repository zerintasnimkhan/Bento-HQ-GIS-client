"use-client";
import React from 'react'
import styles from '../styles/search.module.css'

function SearchComponent() {
  return (
    <div>
      <div className={styles.fields}>
      <input className={styles.input} 
      placeholder='Search for area...'/>
      <img className={styles.searchIcon}
      src="https://res.cloudinary.com/dwrwwcvfb/image/upload/v1705826882/icons8-search-100_dlrokn.png">
      </img>
      </div>
      
    </div>
  )
}

export default SearchComponent