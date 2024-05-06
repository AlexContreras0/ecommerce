import React, { useState, useEffect, useRef } from "react";
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
                    <li>
                      <Link
                        className={styles.subLink}
                        href="/sobre-nosotros/proveedores"
                      >
                        Proveedores
                      </Link>
                    </li>
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
          <svg
            className={styles.logoAutoPlak}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100px"
            height="100px"
          >
            <path d="M 20 2 C 19.66 2 19.340391 2.1807031 19.150391 2.4707031 C 10.160391 16.700703 4.2695312 42.679297 4.0195312 43.779297 C 3.9595313 44.049297 4.0199219 44.330781 4.1699219 44.550781 L 6.1699219 47.550781 C 6.2099219 47.620781 6.2700781 47.690234 6.3300781 47.740234 C 7.6600781 43.210234 13.650391 24.080703 24.150391 7.4707031 C 24.340391 7.1807031 24.66 7 25 7 C 25.34 7 25.659609 7.1807031 25.849609 7.4707031 C 28.349609 11.430703 30.789844 15.840547 33.089844 20.560547 C 33.329844 21.060547 33.130625 21.660391 32.640625 21.900391 L 14.470703 30.880859 C 14.270703 31.360859 14.080625 31.840547 13.890625 32.310547 C 17.330625 31.200547 24.649922 29.029922 35.169922 26.919922 C 35.629922 26.829922 36.089297 27.079766 36.279297 27.509766 C 40.389297 36.999766 42.869687 45.000469 43.679688 47.730469 C 43.689687 47.730469 43.700938 47.720937 43.710938 47.710938 L 45.710938 45.710938 C 45.950938 45.470937 46.050469 45.119062 45.980469 44.789062 C 45.730469 43.649063 39.839609 16.700703 30.849609 2.4707031 C 30.659609 2.1807031 30.34 2 30 2 L 20 2 z M 25 9.890625 C 21.29 15.960625 18.179922 22.290547 15.669922 28.060547 L 20.279297 25.779297 C 21.699297 22.549297 23.28 19.23 25 16 C 26.05 17.97 27.040469 19.970703 27.980469 21.970703 L 30.859375 20.550781 C 28.979375 16.760781 27.01 13.180625 25 9.890625 z M 34.759766 29.050781 C 22.619766 31.520781 14.979687 34.020469 12.929688 34.730469 C 12.649687 35.430469 12.400391 36.109531 12.150391 36.769531 C 17.240391 35.909531 31.870469 33.849219 36.480469 33.199219 C 35.950469 31.859219 35.379766 30.470781 34.759766 29.050781 z M 37.230469 35.119141 C 36.490469 35.219141 35.330156 35.380078 33.910156 35.580078 C 36.110156 41.420078 37.669688 46.389688 38.429688 48.929688 L 41.759766 48.269531 C 41.159766 46.269531 39.650469 41.359141 37.230469 35.119141 z M 32.279297 36.929688 C 32.989297 41.969687 33 45.96 33 46 C 33 46.38 33.210781 46.730625 33.550781 46.890625 L 36.109375 48.169922 C 35.309375 45.579922 33.999297 41.559688 32.279297 36.929688 z M 17.869141 37.900391 C 17.689141 37.930391 17.509844 37.950469 17.339844 37.980469 C 15.799844 42.150469 14.630625 45.769922 13.890625 48.169922 L 16.449219 46.890625 C 16.789219 46.730625 17 46.38 17 46 C 17 45.97 17.019141 43.240391 17.869141 37.900391 z M 15.080078 38.330078 C 13.360078 38.590078 12.029844 38.809219 11.339844 38.949219 C 9.7498438 43.339219 8.72 46.689531 8.25 48.269531 L 11.560547 48.929688 C 12.200547 46.799688 13.410078 42.960078 15.080078 38.330078 z" />
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
                <li>
                  <Link
                    className={styles.subLink}
                    href="/sobre-nosotros/proveedores"
                  >
                    Proveedores
                  </Link>
                </li>
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
