import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import React from "react";
import styles from "../../styles/equipo.module.css";
import TeamGalleryComponent from "@/components/TeamGalleryComponent/TeamGalleryComponent";

export default function page() {
  return (
    <div className={styles.box}>
      <NavMenu />
      <div className={styles.container}>
        <h1 className={styles.title}>Conoce a nuestro equipo</h1>
        <TeamGalleryComponent />
      </div>
      <FooterComponent />
    </div>
  );
}
