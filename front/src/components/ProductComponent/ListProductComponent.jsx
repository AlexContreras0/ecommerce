import { useRouter } from "next/router";
import Link from "next/link";

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
    <div className="asignar classname">
      <div>
        <div className="asignar classname">
          <span className="asignar classname">{idParam}</span>
          <span className="asignar classname">{nombreParam}</span>
          <span className="asignar classname">{priceParam}</span>
          <span className="asignar classname">{tipoParam}</span>
          <span className="asignar classname">{descriptionParam}</span>
          <span className="asignar classname">{stockParam}</span>
          <span className="asignar classname">{ratingParam}</span>
          <span className="asignar classname">{imagenParam}</span>
        <Link
          className="asignar classname"
          href={{
            pathname: "./tienda/producto",
            query: {
              id: idParam,
            },
          }}
          >
          Ver detalles del Producto
        </Link>
        </div>
      </div>
    </div>
  );
}
