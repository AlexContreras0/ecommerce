import React from "react";
import styles from "./TeamGalleryComponent.module.css";

export default function TeamGalleryComponent() {
  return (
    <div className={styles.box}>
      <section className={styles.container}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Alex</h2>
            <p className={styles.cargo}>CEO</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/1242458/pexels-photo-1242458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Ángela</h2>
            <p className={styles.cargo}>Directora creativa</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/2534523/pexels-photo-2534523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Daniela</h2>
            <p className={styles.cargo}>CTO</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/1420008/pexels-photo-1420008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>David</h2>
            <p className={styles.cargo}>CMO</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.name}>Ana</h2>
            <p className={styles.cargo}>Bióloga</p>
          </div>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/943907/pexels-photo-943907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team member"
          />
        </div>
      </section>
    </div>
  );
}
