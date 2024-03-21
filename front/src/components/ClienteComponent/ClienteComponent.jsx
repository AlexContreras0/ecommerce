import React, { useState, useEffect } from "react";
import styles from "./ClienteComponent.module.css";

export default function ClienteComponent() {
  const userLocalStorage = JSON.parse(localStorage.getItem('user'))
  const [userData, setUserData] = useState(userLocalStorage);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  console.log(userData, "este es el userdata del clientecomponente")

  // useEffect(() => {
  //   const userLocalStorage = localStorage.getItem("user");
  //   const isUserLogedLocalStorage = localStorage.getItem("isUserLogedLStorage");

  //   if (userLocalStorage && isUserLogedLocalStorage) {
  //     setUserData(JSON.parse(userLocalStorage));
  //     setIsUserLoggedIn(JSON.parse(isUserLogedLocalStorage));
  //   }
  // }, []);

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Bienvenido a tu perfil</h1>
              <h2 className={styles.subtitleDatos}>Mis datos personales</h2>
              {userData && (
                <>
                  <p className={styles.name}>
                    <span>Nombre: </span>
                    {userData.userName}
                  </p>
                  <p className={styles.phone}>
                    <span>Teléfono:</span>
                    {userData.userPhone}
                  </p>
                  <p className={styles.address}>
                    <span>Dirección:</span> {userData.userAddress}
                  </p>
                </>
              )}
              <button className={styles.buttonEdit}>
                Editar datos personales
              </button>
            </div>
            <div>
              {/* FALTA LÓGICA PARA MOSTRAR LOS PEDIDOS */}
              <p className={styles.orders}>Mis pedidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
