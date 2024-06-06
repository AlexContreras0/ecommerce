import React, { useEffect } from "react";
import styles from "../../styles/proveedores.module.css";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

export default function page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const images = document.querySelectorAll(`.${styles.image}`);

      const activateFirstImage = () => {
        resetFocus();
        if (images.length > 0) {
          images[0].classList.add(styles.active);
        }
      };

      for (let [i, imageSelected] of images.entries()) {
        imageSelected.addEventListener("click", function focus() {
          resetFocus();
          imageSelected.classList.toggle(styles.active);
        });
      }

      activateFirstImage();

      function resetFocus() {
        images.forEach((i) => i.classList.remove(styles.active));
      }
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={`${styles.container} ${styles.box}`}>
        <h1 className={styles.title}>Conoce a nuestros proveedores</h1>
        <div className={styles.body}>
          <section className={styles.images}>
            <div
              className={`${styles.image} ${styles.active}`}
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/8463778/pexels-photo-8463778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            >
              <div className={styles.label}>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                    />
                  </svg>
                </div>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a"
                  className={styles.info}
                >
                  <p className={styles.main}>Ferrari</p>
                  <p className={styles.sub}>Italia</p>
                </a>
              </div>
            </div>
            <div
              className={`${styles.image} ${styles.active}`}
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/14188010/pexels-photo-14188010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            >
              <div className={styles.label}>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                    />
                  </svg>
                </div>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a"
                  className={styles.info}
                >
                  <p className={styles.main}>Bentley</p>
                  <p className={styles.sub}>Reino Unido</p>
                </a>
              </div>
            </div>
            <div
              className={`${styles.image} ${styles.active}`}
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/10493497/pexels-photo-10493497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            >
              <div className={styles.label}>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                    />
                  </svg>
                </div>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a"
                  className={styles.info}
                >
                  <p className={styles.main}>Lamborghini</p>
                  <p className={styles.sub}>Italia</p>
                </a>
              </div>
            </div>
            <div
              className={`${styles.image} ${styles.active}`}
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/19782034/pexels-photo-19782034/free-photo-of-coche-vehiculo-mercedes-marca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            >
              <div className={styles.label}>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                    />
                  </svg>
                </div>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a"
                  className={styles.info}
                >
                  <p className={styles.main}>Mercedes</p>
                  <p className={styles.sub}>Alemania</p>
                </a>
              </div>
            </div>
            <div
              className={`${styles.image} ${styles.active}`}
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3892890/pexels-photo-3892890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            >
              <div className={styles.label}>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bag-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                    />
                  </svg>
                </div>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a"
                  className={styles.info}
                >
                  <p className={styles.main}>BMW</p>
                  <p className={styles.sub}>Alemania</p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
