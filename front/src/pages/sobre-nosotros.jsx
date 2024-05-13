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
        <div className={styles.backCabecera}>
          <section className={styles.cabeceraContainer}>
            <h1 className={styles.tituloCabecera}>Sobre nosotros</h1>
            <p className={styles.parrafoCabecera}>
              Somos líderes en la venta de placas de coches personalizadas y
              estándar, ofreciendo una amplia gama de opciones para satisfacer
              las necesidades de nuestros clientes.
              <br /> <br />
              Ya sea que busques darle un toque único a tu vehículo con una
              placa personalizada o necesites reemplazar una placa estándar,
              estamos aquí para brindarte un servicio rápido y confiable.
              <br />
              <br />
              Con años de experiencia en la industria, podemos asesorarte para
              encontrar la placa perfecta que se ajuste a tus preferencias y
              requisitos específicos. Confía en nosotros para obtener tus placas
              de coches con facilidad y profesionalismo.
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
                Nuestra misión en la venta de placas de coches es simple pero
                poderosa: estamos comprometidos a proporcionar a nuestros
                clientes productos de la más alta calidad y un servicio
                excepcional. Nos esforzamos por ser la opción preferida cuando
                se trata de placas de coches, ofreciendo una amplia variedad de
                opciones que van desde placas estándar hasta personalizadas,
                siempre cumpliendo con los más altos estándares de seguridad y
                regulaciones.
                <br />
                <br />
                Buscamos no solo satisfacer las necesidades de nuestros
                clientes, sino superar sus expectativas en términos de calidad,
                rapidez y atención al cliente. Nuestro objetivo es convertirnos
                en el socio confiable al que acudir para todas las necesidades
                relacionadas con placas de coches, brindando soluciones
                confiables y adaptadas a cada cliente.
                <br />
                <br />
                En resumen, estamos comprometidos a hacer que el proceso de
                obtener placas de coches sea fácil, conveniente y sin
                complicaciones para todos nuestros clientes, respaldado por un
                servicio excepcional y productos de primera calidad.
              </p>
              <Link className={styles.linkMision} href="#">
                Enlace
              </Link>
            </div>
            <img
              className={styles.imgMision}
              src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </section>
        </div>

        <section className={styles.proveedorContainer}>
          <img
            className={styles.imgProveedor}
            src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <div className={styles.proveedorTextContainer}>
            <h2 className={styles.tituloProveedor}>Visión</h2>
            <p className={styles.parrafoProveedor}>
              Nuestra visión es ser reconocidos como líderes indiscutibles en la
              industria de placas de coches, no solo por la calidad excepcional
              de nuestros productos, sino también por nuestra innovación
              constante y nuestro enfoque centrado en el cliente.
              <br />
              <br />
              Nos esforzamos por ser pioneros en nuevas tecnologías y tendencias
              emergentes en el campo de las placas de coches, ofreciendo
              soluciones que no solo cumplen, sino que superan las expectativas
              de nuestros clientes en cuanto a personalización, seguridad y
              durabilidad. Además, aspiramos a establecer relaciones sólidas y
              duraderas con nuestros clientes, basadas en la confianza mutua y
              el compromiso de brindar un servicio excepcional en cada
              interacción.
              <br />
              <br />
              Nos vemos no solo como vendedores de placas de coches, sino como
              socios de confianza de nuestros clientes en su viaje
              automovilístico, proporcionando soluciones que agregan valor y
              facilitan su experiencia. En resumen, nuestra visión es ser la
              referencia en la industria, inspirando confianza y lealtad en
              nuestros clientes a través de la excelencia en todo lo que
              hacemos.
            </p>
            <Link className={styles.linkProveedor} href="#">
              Enlace
            </Link>
          </div>
        </section>

        <div className={styles.backProveedorPillContainer}>
          <section className={styles.proveedorPillContainer}>
            <div className={styles.proveedorPillTextContainer}>
              <h2 className={styles.proveedorPillTitulo}>
                Forma parte de AutoPlak
              </h2>
              <p className={styles.proveedorPillParrafo}>
                Únete a nosotros y marca la diferencia en la carretera.
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
              Descubre una nueva forma de personalizar tu experiencia
              automovilística con nosotros. En nuestra empresa, te ofrecemos
              tres propuestas de valor distintivas: calidad insuperable en cada
              placa de coche, opciones de personalización ilimitadas para
              reflejar tu estilo único y un servicio al cliente excepcional que
              te acompaña en cada paso del camino. Con nosotros, tu vehículo no
              solo se destaca en la carretera, sino que también se convierte en
              una expresión auténtica de tu personalidad.
            </p>
            <div className={styles.colContainer}>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>
                  Personalización sin límites
                </h2>
                <p className={styles.parrafoValueCol}>
                  Transforma tu placa de coche en una obra de arte única con
                  nuestra amplia gama de opciones de personalización. Desde
                  elegantes diseños hasta detalles específicos que reflejen tu
                  estilo y personalidad, te ofrecemos la libertad de crear una
                  placa que sea verdaderamente tuya.
                </p>
                <Link className={styles.linkValueCol} href="#">
                  Saber más
                </Link>
              </div>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>Calidad insuperable</h2>
                <p className={styles.parrafoValueCol}>
                  Nuestras placas de coche están fabricadas con los más altos
                  estándares de calidad y durabilidad. Utilizamos materiales
                  resistentes que garantizan que tu placa permanezca en óptimas
                  condiciones incluso en las condiciones más adversas. Confía en
                  nosotros para ofrecerte productos que cumplen y superan tus
                  expectativas.
                </p>
                <Link className={styles.linkValueCol} href="#">
                  Saber más
                </Link>
              </div>
              <div className={styles.valueCol}>
                <h2 className={styles.tituloValueCol}>
                  Experiencia de cliente excepcional
                </h2>
                <p className={styles.parrafoValueCol}>
                  En nuestra empresa, el cliente es nuestra prioridad número
                  uno. Desde el momento en que nos contactas hasta la entrega de
                  tu placa de coche, te brindamos un servicio personalizado y
                  atento. Nuestro equipo está siempre disponible para responder
                  tus preguntas y asegurarse de que tu experiencia con nosotros
                  sea impecable en cada paso del proceso.
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
