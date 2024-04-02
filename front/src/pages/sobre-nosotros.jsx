import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import React from "react";
import styles from "../styles/sobre-nosotros.module.css";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <NavMenu />
      <section className={`${styles.container} ${styles.box}`}>
        <section className={styles.cabeceraContainer}>
          <h1 className={styles.tituloCabecera}>Sobre nosotros</h1>
          <p className={styles.parrafoCabecera}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            provident nobis amet necessitatibus eligendi sapiente, nemo
            aspernatur iure ab mollitia voluptatem saepe ut numquam. Iure
            explicabo quisquam ipsum nisi aut?
          </p>
          <Link className={styles.linkCabecera} href="/tienda">
            Descubrir más
          </Link>
        </section>

        <div className={styles.backMisionContainer}>
          <section className={styles.misionContainer}>
            <div className={styles.misionTextContainer}>
              <h2 className={styles.tituloMision}>Misión</h2>
              <p className={styles.parrafoMision}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repellendus, quas, voluptate, quod quia quibusdam
                tempora exercitationem doloribus autem quae quos. Quisquam
                repellendus, quas, voluptate, quod quia quibusdam tempora
                exercitationem doloribus autem quae quos.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repellendus, quas, voluptate, quod quia quibusdam
                tempora exercitationem doloribus autem quae quos. Quisquam
                repellendus, quas, voluptate, quod quia quibusdam tempora
                exercitationem doloribus autem quae quos.
              </p>
              <Link className={styles.linkMision} href="#">
                Enlace
              </Link>
            </div>
            <img
              className={styles.imgMision}
              src="https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </section>
        </div>

        <section className={styles.proveedorContainer}>
          <img
            className={styles.imgProveedor}
            src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
              "
            alt=""
          />

          <div className={styles.proveedorTextContainer}>
            <h2 className={styles.tituloProveedor}>Visión</h2>
            <p className={styles.parrafoProveedor}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              repellendus, quas, voluptate, quod quia quibusdam tempora
              exercitationem doloribus autem quae quos. Quisquam repellendus,
              quas, voluptate, quod quia quibusdam tempora exercitationem
              doloribus autem quae quos.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              repellendus, quas, voluptate, quod quia quibusdam tempora
              exercitationem doloribus autem quae quos.
              <br />
              <br />
              Quisquam repellendus, quas, voluptate, quod quia quibusdam tempora
              exercitationem doloribus autem quae quos. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quisquam repellendus, quas,
              voluptate, quod quia quibusdam tempora exercitationem doloribus
              autem quae quos. Quisquam repellendus, quas, voluptate, quod quia
              quibusdam tempora exercitationem doloribus autem quae quos.
            </p>
            <Link className={styles.linkProveedor} href="#">
              Enlace
            </Link>
            <img
              className={styles.imgProveedorMobile}
              src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
              "
              alt="Foto De Campo Verde Cerca De Las Montañas
              "
            />
          </div>
        </section>

        <div className={styles.backProveedorPillContainer}>
          <section className={styles.proveedorPillContainer}>
            <div className={styles.proveedorPillTextContainer}>
              <h2 className={styles.proveedorPillTitulo}>
                Forma parte de Agrooe
              </h2>
              <p className={styles.proveedorPillParrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <Link
              className={styles.proveedorPillLink}
              href="/sobre-nosotros/proveedores"
            >
              Enlace
            </Link>
          </section>
        </div>

        <div className={styles.backValueContainer}>
          <section className={styles.valueContainer}>
            <h2 className={styles.valueTitulo}>Nuestra propuesta de valor</h2>
            <p className={styles.valueParrafo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              repellendus, quas, voluptate, quod quia quibusdam tempora
              exercitationem doloribus autem quae quos. Quisquam repellendus,
              quas, voluptate, quod quia quibusdam tempora exercitationem
              doloribus autem quae quos.
            </p>
            <div className={styles.colContainer}>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>Valor</h2>
                <p className={styles.parrafoValueCol}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam repellendus, quas, voluptate, quod quia quibusdam
                  tempora exercitationem doloribus autem quae quos.
                  <br />
                  <br />
                  Quisquam repellendus, quas, voluptate, quod quia quibusdam
                  tempora exercitationem doloribus autem quae quos.
                </p>
                <Link className={styles.linkValueCol} href="#">
                  Enlace
                </Link>
              </div>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>Valor</h2>
                <p className={styles.parrafoValueCol}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam repellendus, quas, voluptate, quod quia quibusdam
                  tempora exercitationem doloribus autem quae quos.
                  <br />
                  <br />
                  Quisquam repellendus, quas, voluptate, quod quia quibusdam
                  tempora exercitationem doloribus autem quae quos.
                </p>
                <Link className={styles.linkValueCol} href="#">
                  Enlace
                </Link>
              </div>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>Valor</h2>
                <p className={styles.parrafoValueCol}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam repellendus, quas, voluptate, quod quia quibusdam
                  tempora exercitationem doloribus autem quae quos.
                  <br />
                  <br />
                  Quisquam repellendus, quas, voluptate, quod quia quibusdam
                  tempora exercitationem doloribus autem quae quos.
                </p>
                <Link className={styles.linkValueCol} href="#">
                  Enlace
                </Link>
              </div>
            </div>
          </section>
        </div>

        <section className={styles.contactoContainer}>
          <h2 className={styles.contactoTitulo}> Queremos escucharte</h2>
          <p className={styles.contactoParrafo}>
            Ponte en contacto con nosotros y estaremos encantados de escuchar lo
            que tienes que decirnos
          </p>
          <Link className={styles.contactoLink} href="/sobre-nosotros/contacto">
            Contacto
          </Link>
        </section>
      </section>
      <FooterComponent />
    </div>
  );
}
