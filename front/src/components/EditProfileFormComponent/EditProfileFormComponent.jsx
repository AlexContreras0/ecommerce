import React, { useState } from "react";
import styles from "./EditProfileFormComponent.module.css";

export default function EditProfileFormComponent({ userData, onSubmit }) {
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [phone, setPhone] = useState(userData.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, address, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">Guardar Cambios</button>
    </form>
  );
}
