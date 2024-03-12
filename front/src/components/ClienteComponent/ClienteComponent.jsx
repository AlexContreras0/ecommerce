import React, { useState } from "react";
import styles from "./ClienteComponent.module.css";

export default function ClienteComponent(props) {
  const { id, nombre, address, phone } = props;

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.container}>
          <h1 className={styles.title}>Bienvenido a tu perfil</h1>
          <div className={styles.infoContainer}>
            <h2 className="name">Nombre Apellido Apellido</h2>
            <p>TLFN: 667 667 667</p>
            <p>DIR: C/La Rata, 3, 2-1</p>
            <button>Editar datos personales</button>
          </div>
          <div>
            <p>Mis pedidos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
