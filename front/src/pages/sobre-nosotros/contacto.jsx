import NavMenu from "@/components/NavMenu/NavMenu";
import React from "react";
import styles from "../../styles/contacto.module.css";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import ContactComponent from "@/components/ContactComponent/contactComponent";
import SocialNavMenuComponent from "@/components/SocialNavMenuComponent/SocialNavMenuComponent";

export default function page() {
  return (
    <div>
      <NavMenu />
      <div className={`${styles.container} ${styles.box}`}>
        <div className={styles.leftContainer}>
          <div>
            <h1 className={styles.title}>Tenemos ganas de escucharte</h1>
            <p className={styles.text}>
              Si tienes alguna duda, comentario o sugerencia, no dudes en
              contactarnos. Estamos aquí para ayudarte.
            </p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.info}>
              <svg
                className={styles.infoIcon}
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                />
              </svg>
              agroee@agrooe.com
            </p>
            <p className={styles.info}>
              <svg
                className={styles.infoIcon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                />
              </svg>
              676 766 677
            </p>
            <p className={styles.info}>
              <svg
                className={styles.infoIcon}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
                />
              </svg>
              C. de Marie Curie, 8, Edificio B (PTA), Málaga.
              <br />
              Oficinas MC24.1 y MC24.2.
            </p>
          </div>
          <div className={styles.SocialNavMenuComponent}>
            <SocialNavMenuComponent />
          </div>
        </div>
        <ContactComponent className={styles.ContactComponent} />
        <div className={styles.SocialNavMenuComponentMobile}>
          <SocialNavMenuComponent />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
