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
            src="https://e1.pxfuel.com/desktop-wallpaper/843/829/desktop-wallpaper-avengers-infinity-war-captain-america-chris-evans-movies-avengers-vertical.jpg"
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
            src="https://e0.pxfuel.com/wallpapers/779/310/desktop-wallpaper-best-for-android-and-ios-marvel-marvel-spiderman-avengers-vertical-marvel.jpg"
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
            src="https://e1.pxfuel.com/desktop-wallpaper/132/285/desktop-wallpaper-avengers-infinity-war-thanos-josh-brolin-movies-avengers-vertical.jpg"
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
            src="https://w0.peakpx.com/wallpaper/477/401/HD-wallpaper-thor-in-avengers-endgame.jpg"
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
            src="https://e1.pxfuel.com/desktop-wallpaper/214/696/desktop-wallpaper-iron-man-infinity-stones-avengers-endgame-avengers-vertical.jpg"
            alt="Team member"
          />
        </div>
      </section>
    </div>
  );
}
