import React from "react";
import styles from "./FooterComponent.module.css";
import Link from "next/link";
import SocialNavMenuComponent from "../SocialNavMenuComponent/SocialNavMenuComponent";

export default function FooterComponent() {
  return (
    <div className={styles.backContainer}>
      <div className={styles.container}>
        <Link className={styles.linklogo} href="/tienda">
          <svg className={styles.logo} viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.962 7.962 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z"
            />
          </svg>
        </Link>
        <div className={styles.column}>
          <h2 className={styles.subTitle}>Compañía</h2>

          <Link className={styles.subLink} href="/sobre-nosotros">
            Nosotros
          </Link>
          <Link className={styles.subLink} href="/sobre-nosotros/equipo">
            Equipo
          </Link>
          <Link className={styles.subLink} href="/sobre-nosotros/proveedores">
            Proveedores
          </Link>
          <Link className={styles.subLink} href="/sobre-nosotros/voluntarios">
            Voluntarios
          </Link>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subTitle}>Ayuda</h2>

          <Link className={styles.subLink} href="/sobre-nosotros/contacto">
            Contacto
          </Link>
          <Link className={styles.subLink} href="/preguntas-frecuentes">
            Preguntas frecuentes
          </Link>
          <Link className={styles.subLink} href="/textos-legales">
            Avisos Legales
          </Link>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subTitle}>Tienda</h2>

          <Link className={styles.subLink} href="/tienda">
            Tienda
          </Link>
          <Link className={styles.subLink} href="/tiendas-fisicas">
            Tiendas físicas
          </Link>
        </div>
        <div className={styles.column}>
          <h2 className={styles.subTitle}>Síguenos</h2>

          <SocialNavMenuComponent />
        </div>
      </div>
    </div>
  );
}
