import React, { useEffect, useState } from "react";
import styles from "./ItemCount.module.css";

export default function ItemCount(props) {
  const {product, count, setCount} = props
  let counter = count

  useEffect( () => {
    setCount(counter)
    console.log("este es el count y el counter", count, counter)
  }, [counter])

  

  const addItem = () => {

    if (count < product.productStock) {
      counter = count + 1
      setCount(counter);
      // updateQuantity(count + 1);
    } else {
      alert(
        "Lo sentimos mucho, no hay mas unidades disponibles de este producto."
      );
    }
  };

  const removeItem = () => {
    if (count > 0) {
      counter = count - 1
      setCount(counter);
      // updateQuantity(count - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={removeItem}>
        -
      </button>
      <p className={styles.count}>{count}</p>
      <button className={styles.button} onClick={addItem}>
        +
      </button>
    </div>
  );
}
