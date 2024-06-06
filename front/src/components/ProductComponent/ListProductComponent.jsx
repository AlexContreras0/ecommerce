import Link from "next/link";
import styles from "./ListProductComponent.module.css";

export default function ListProductComponent(props) {
  const {
    idParam,
    nombreParam,
    priceParam,
    tipoParam,
    descriptionParam,
    stockParam,
    ratingParam,
    imagenParam,
  } = props;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imagenParam[0]}></img>
      <h2 className={styles.name}>{nombreParam}</h2>
      <p className={styles.price}>{priceParam}€</p>
      <Link
        className={styles.link}
        href={{
          pathname: "./tienda/producto",
          query: {
            id: idParam,
          },
        }}
      >
        Ver detalles
      </Link>
    </div>
  );
}
