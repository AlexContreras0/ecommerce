import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import React from "react";
import styles from "../../styles/equipo.module.css";

export default function page() {
  return (
    <div>
      <NavMenu />
      <div className={styles.container}>
        <h1 className={styles.title}>Conóce a nuestro equipo</h1>
        <div className={styles.miembroContainer}>
          <div className={styles.miembroCard}>
            {/* <img
              src="https://c.tenor.com/A3PC_hXmTs4AAAAC/tenor.gif"
              class="gif"
              width="250px"
              height="300px"
              alt="gif"
            /> */}
            <h2>Nombre Apellido Apellido</h2>
            <h3>Cargo</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              labore?
            </p>
          </div>
          <div className={styles.miembroCard}>
            {/* <img
              src="https://c.tenor.com/A3PC_hXmTs4AAAAC/tenor.gif"
              class="gif"
              width="250px"
              height="300px"
              alt="gif"
            /> */}
            <h2>Nombre Apellido Apellido</h2>
            <h3>Cargo</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              labore?
            </p>
          </div>
          <div className={styles.miembroCard}>
            {/* <img
              src="https://c.tenor.com/A3PC_hXmTs4AAAAC/tenor.gif"
              class="gif"
              width="250px"
              height="300px"
              alt="gif"
            /> */}
            <h2>Nombre Apellido Apellido</h2>
            <h3>Cargo</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              labore?
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
