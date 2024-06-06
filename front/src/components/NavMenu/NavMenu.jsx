import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openIcon = (
    <svg
      width="30"
      height="30"
      fill="currentColor"
      className={styles.iconMobileMenu}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );

  const closeIcon = (
    <svg
      width="30"
      height="30"
      fill="currentColor"
      className={styles.iconMobileMenu}
      viewBox="0 0 16 16"
    >
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>
  );

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.backBody}>
      <div className={styles.body}>
        <button className={styles.toggleButton} onClick={handleMenuToggle}>
          {isMenuOpen ? closeIcon : openIcon}
        </button>
        {isMenuOpen && (
          <div className={styles.menu}>
            <nav className={styles.navVisible}>
              <ul className={styles.navList}>
                <li>
                  <Link className={styles.link} href="/sobre-nosotros">
                    Conocenos
                    <svg
                      className={styles.arrow}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={styles.subLink}
                        href="/sobre-nosotros/equipo"
                      >
                        Equipo
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        className={styles.subLink}
                        href="/sobre-nosotros/proveedores"
                      >
                        Proveedores
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        className={styles.subLink}
                        href="/sobre-nosotros/contacto"
                      >
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={styles.link} href="/tienda">
                    Tienda
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} href="/login-usuario">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className={styles.mobileCart} href="/tienda/carrito">
                    <svg
                      className={styles.cartIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <Link className={styles.link} href="/tienda">
          <svg className={styles.logo} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.962 7.962 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z"
            />
          </svg>
        </Link>

        <nav className={styles.navRight}>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.link} href="/sobre-nosotros">
                Conocenos
                <svg
                  className={styles.arrow}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </Link>
              <ul>
                <li>
                  <Link
                    className={styles.subLink}
                    href="/sobre-nosotros/equipo"
                  >
                    Equipo
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className={styles.subLink}
                    href="/sobre-nosotros/proveedores"
                  >
                    Proveedores
                  </Link>
                </li> */}
                <li>
                  <Link
                    className={styles.subLink}
                    href="/sobre-nosotros/contacto"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className={styles.link} href="/tienda">
                Tienda
              </Link>
            </li>

            <li>
              <Link className={styles.link} href="/login-usuario">
                Login
              </Link>
            </li>
          </ul>
          <Link className={styles.link} href="/tienda/carrito">
            <svg
              className={styles.cartIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
