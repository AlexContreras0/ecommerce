// SearchBar.jsx
import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({
  inputSearched,
  setInputSearched,
  refreshProductsHandler,
  searchedHandler,
}) => {
  return (
    <div className={styles.filterContainer}>
      <form className={styles.formFilter} onSubmit={searchedHandler}>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputFilter}
            type="text"
            name="inputSearched"
            placeholder="Buscar"
            value={inputSearched}
            onChange={(e) => setInputSearched(e.target.value)}
          />
          <button
            className={styles.buttonFilter}
            type="button"
            onClick={refreshProductsHandler}
          >
            <svg className={styles.iconDelete} viewBox="0 0 17 17">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </button>
        </div>
        <button
          name="inputSearched"
          className={styles.buttonRefresh}
          type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
