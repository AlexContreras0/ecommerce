import React from "react";
import styles from "./TeamGalleryComponent.module.css";

export default function TeamGalleryComponent() {
  return (
    <div className={styles.box}>
      <section className={styles.container}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Nombre</h2>
            <p className={styles.cargo}>Cargo</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Nombre</h2>
            <p className={styles.cargo}>Cargo</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Nombre</h2>
            <p className={styles.cargo}>Cargo</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/39501/lamborghini-brno-racing-car-automobiles-39501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Nombre</h2>
            <p className={styles.cargo}>Cargo</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Nombre</h2>
            <p className={styles.cargo}>Cargo</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/2631489/pexels-photo-2631489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
      </section>
    </div>
  );
}
