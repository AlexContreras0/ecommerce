import React, { useState } from "react";
import styles from "./ClienteComponent.module.css";

export default function ClienteComponent(props) {
  const { id, nombre, address, phone } = props;

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Bienvenido a tu perfil</h1>
              <h2 className={styles.subtitleDatos}>Mis datos personales</h2>
              <p className={styles.name}>
                <p>Nombre: </p>
                {nombre}
              </p>
              <p className={styles.phone}>
                <p>Teléfono:</p>
                {phone}
              </p>
              <p className={styles.address}>
                <p>Dirección:</p> {address}
              </p>
              <button className={styles.buttonEdit}>
                Editar datos personales
              </button>
            </div>
            <div>
              {/* FALTA LOGICA MOSTRAR LOS PEDIDOS */}
              <p className={styles.orders}>Mis pedidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
