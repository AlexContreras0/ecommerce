import React, { useState } from "react";
import styles from "./FilterComponent.module.css";

const FilterComponent = () => {
  const [selected, setSelected] = useState({
    Aceite: false,
    Verdura: false,
    Embutido: false,
    Ecologico: false,
    Gourmet: false,
  });

  const [datosFiltrados, setDatosFiltrados] = useState([]);

  const handleOnCheckbox = (e) => {
    setSelected({
      ...selected,
      [e.target.value]: e.target.checked,
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.checkbox - container}>
        <div className={styles.input - checkbox}>
          <input
            type="checkbox"
            name="categories"
            value="Aceite"
            id="Aceite"
            onChange={handleOnCheckbox}
          />
          <label for="Aceite">Aceite</label>
        </div>
        <div className={styles.input - checkbox}>
          <input
            type="checkbox"
            name="categories"
            value="Verdura"
            id="Verdura"
            onChange={handleOnCheckbox}
          />
          <label for="Verdura">Verdura</label>
        </div>
        <div className={styles.input - checkbox}>
          <input
            type="checkbox"
            name="categories"
            value="Embutido"
            id="Embutido"
            onChange={handleOnCheckbox}
          />
          <label for="Embutido">Embutido</label>
        </div>
        <div className={styles.input - checkbox}>
          <input
            type="checkbox"
            name="categories"
            value="Ecologico"
            id="Ecologico"
            onChange={handleOnCheckbox}
          />
          <label for="Ecologico">Ecológico</label>
        </div>
        <div className={styles.input - checkbox}>
          <input
            type="checkbox"
            name="categories"
            value="Gourmet"
            id="Gourmet"
            onChange={handleOnCheckbox}
          />
          <label for="Gourmet">Gourmet</label>
        </div>
      </div>
      <div className={styles.containerInfoSelected}></div>
    </div>
  );
};

export default FilterComponent;
