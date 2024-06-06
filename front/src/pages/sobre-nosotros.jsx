import FooterComponent from "@/components/FooterComponent/FooterComponent";
import React from "react";
import styles from "../styles/sobre-nosotros.module.css";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <section className={`${styles.container} ${styles.box}`}>
        <div className={styles.backCabecera}>
          <section className={styles.cabeceraContainer}>
            <h1 className={styles.tituloCabecera}>Sobre nosotros</h1>
            <p className={styles.parrafoCabecera}>
              ¡Bienvenidos a Plant'a, tu destino online para plantas
              excepcionales!
              <br /> <br />
              En Plant'a, nos apasiona la naturaleza y creemos que cada hogar y
              oficina merece un toque verde que inspire tranquilidad y belleza.
              <br /> <br />
              Nuestra tienda online es el lugar perfecto para encontrar una
              amplia variedad de plantas de interior y exterior, cuidadosamente
              seleccionadas para satisfacer todos los gustos y necesidades.
              Desde suculentas y cactus hasta plantas tropicales y árboles
              frutales, ofrecemos una selección diversificada que garantiza que
              encontrarás la planta ideal para cualquier espacio.
              <br />
              <br />
              ¡Te invitamos a unirte a nuestra comunidad de amantes de la
              naturaleza y comenzar tu viaje hacia un entorno más verde y
              saludable con Plant'a!
            </p>
            <Link className={styles.linkCabecera} href="/tienda">
              Descubrir más
            </Link>
          </section>
        </div>

        <div className={styles.backMisionContainer}>
          <section className={styles.misionContainer}>
            <div className={styles.misionTextContainer}>
              <h2 className={styles.tituloMision}>Misión</h2>
              <p className={styles.parrafoMision}>
                Nuestra misión es hacer que la jardinería sea accesible y
                disfrutable para todos.
                <br />
                <br />
                Por eso, trabajamos arduamente para ofrecer plantas de alta
                calidad a precios competitivos, acompañadas de un servicio al
                cliente excepcional.
                <br />
                <br />
                Nos enorgullece ser tu socio de confianza en el mundo de la
                jardinería, y estamos aquí para ayudarte a cultivar un entorno
                verde y armonioso en tu vida cotidiana.
              </p>
              <Link
                className={styles.linkMision}
                href="/sobre-nosotros/contacto"
              >
                Más información
              </Link>
            </div>
            <img
              className={styles.imgMision}
              src="https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </section>
        </div>

        <section className={styles.proveedorContainer}>
          <img
            className={styles.imgProveedor}
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <div className={styles.proveedorTextContainer}>
            <h2 className={styles.tituloProveedor}>Visión</h2>
            <p className={styles.parrafoProveedor}>
              En Plant'a, nuestra visión es transformar cada hogar, oficina y
              espacio urbano en un oasis verde y viviente, donde las plantas no
              solo embellecen el entorno sino también enriquecen la vida de las
              personas.
              <br />
              <br />
              Creemos en el poder de la naturaleza para crear ambientes más
              saludables, felices y productivos. Aspiramos a ser la tienda
              online de referencia para todos los entusiastas de las plantas,
              desde principiantes hasta expertos jardineros.
              <br />
              <br />
              Nuestra meta es no solo vender plantas, sino también inspirar y
              educar a nuestra comunidad sobre los beneficios del cultivo y el
              cuidado de las plantas. Queremos que cada cliente descubra la
              alegría y la satisfacción que viene con la jardinería y la
              conexión con la naturaleza.
            </p>
            <Link className={styles.linkProveedor} href="/tienda">
              Descubrir las plantas
            </Link>
          </div>
        </section>

        <div className={styles.backProveedorPillContainer}>
          <section className={styles.proveedorPillContainer}>
            <div className={styles.proveedorPillTextContainer}>
              <h2 className={styles.proveedorPillTitulo}>
                Forma parte de Plant'a
              </h2>
              <p className={styles.proveedorPillParrafo}>
                Únete a nosotros y cultiva un mundo más verde con nosotros.
              </p>
            </div>
            <Link className={styles.proveedorPillLink} href="/login-usuario">
              Unirme
            </Link>
          </section>
        </div>

        <div className={styles.backValueContainer}>
          <section className={styles.valueContainer}>
            <h2 className={styles.valueTitulo}>Nuestra propuesta de valor</h2>
            <p className={styles.valueParrafo}>
              En Plant'a, nuestra pasión por la naturaleza y el deseo de crear
              espacios verdes y armoniosos nos inspiran a ofrecerte lo mejor en
              plantas y jardinería. Nuestra tienda online está diseñada para
              satisfacer las necesidades de todos los amantes de las plantas,
              desde los principiantes hasta los más experimentados. Queremos ser
              tu socio de confianza en este hermoso viaje de cultivar vida y
              belleza en cada rincón de tu hogar y oficina.
            </p>
            <div className={styles.colContainer}>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>
                  Variedad y Calidad Excepcional
                </h2>
                <p className={styles.parrafoValueCol}>
                  En Plant'a, nos enorgullece ofrecer una amplia gama de plantas
                  cuidadosamente seleccionadas, desde suculentas y cactus hasta
                  plantas tropicales y árboles frutales. Cada planta es elegida
                  por su calidad y belleza, asegurando que recibas solo lo mejor
                  para tu hogar.
                </p>
                <Link className={styles.linkValueCol} href="#">
                  Saber más
                </Link>
              </div>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>
                  Asesoramiento Experto y Personalizado
                </h2>
                <p className={styles.parrafoValueCol}>
                  Sabemos que cada planta tiene sus propios requerimientos y
                  cada espacio sus propias características. Por eso, nuestro
                  equipo de expertos está siempre disponible para responder tus
                  preguntas y ofrecerte asesoramiento personalizado.
                </p>
                <Link className={styles.linkValueCol} href="#">
                  Saber más
                </Link>
              </div>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>
                  Compromiso con la Sostenibilidad
                </h2>
                <p className={styles.parrafoValueCol}>
                  En Plant'a, estamos comprometidos con el cuidado del medio
                  ambiente. Utilizamos materiales de embalaje reciclables y
                  promovemos prácticas ecológicas en todas nuestras operaciones.
                  Al elegir nuestras plantas, no solo estás embelleciendo tu
                  espacio, sino también contribuyendo a un planeta más saludable
                  y sostenible.
                </p>
                <Link className={styles.linkValueCol} href="#">
                  Saber más
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
