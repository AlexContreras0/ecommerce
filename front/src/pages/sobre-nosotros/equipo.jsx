import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import React from "react";
import styles from "../../styles/equipo.module.css";

export default function page() {
  return (
    <div>
      <NavMenu />
      <div className={`${styles.container} ${styles.box}`}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Conóce a nuestro equipo</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            asperiores perferendis ipsa, delectus modi facere dolore, nemo
            placeat perspiciatis rem blanditiis laboriosam eaque nisi neque
            molestias velit illo provident non!
          </p>
        </div>
        <div className={styles.miembroContainer}>
          <div className={styles.miembroCard}>
            {/* <img
              src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png"
              width="250px"
              height="300px"
              alt="img"
            /> */}
            <div className={styles.textContainer}>
              <h2 className={styles.nombre}>Nombre Apellido Apellido</h2>
              <h3 className={styles.cargo}>Cargo</h3>
              <p className={styles.frase}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, labore?
              </p>
            </div>
          </div>
          <div className={styles.miembroCard}>
            {/* <img
              src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png"
              width="250px"
              height="300px"
              alt="img"
            /> */}
            <div className={styles.textContainer}>
              <h2 className={styles.nombre}>Nombre Apellido Apellido</h2>
              <h3 className={styles.cargo}>Cargo</h3>
              <p className={styles.frase}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, labore?
              </p>
            </div>
          </div>
          <div className={styles.miembroCard}>
            {/* <img
              src="https://cdn-icons-png.flaticon.com/512/3577/3577429.png"
              width="250px"
              height="300px"
              alt="img"
            /> */}
            <div className={styles.textContainer}>
              <h2 className={styles.nombre}>Nombre Apellido Apellido</h2>
              <h3 className={styles.cargo}>Cargo</h3>
              <p className={styles.frase}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, labore?
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
