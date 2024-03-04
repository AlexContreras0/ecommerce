import React, { useState } from "react";
import styles from "./ProductComponent.module.css";
import ItemCount from "../ItemCount/ItemCount";

export default function ProductComponent({ product, pic1, pic2, pic3, pic4 }) {
  const [image, setImage] = useState();

  const selectImage = (img) => {
    setImage(img);
  };

  const addToCart = () => {
    // Hacer logica para añadir al carrito
  };

  const addToWishList = () => {
    // Hacer logica para añadir a la lista de deseos
  };

  return (
    <div className={styles.body}>
      <section className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageDetailsContainer}>
            <img
              className={styles.imageDetails}
              onClick={() => selectImage(pic1)}
              alt="imagen producto"
              src="https://freepngimg.com/thumb/tomato/6-tomato-png-image.png"
            />
            <img
              className={styles.imageDetails}
              onClick={() => selectImage(pic2)}
              alt="imagen producto"
              src="https://freepngimg.com/thumb/broccoli/12-broccoli-png-image-with-transparent-background.png"
            />
            <img
              className={styles.imageDetails}
              onClick={() => selectImage(pic3)}
              alt="imagen producto"
              src="https://freepngimg.com/thumb/carrot/1-carrot-png-image.png"
            />
            <img
              className={styles.imageDetails}
              onClick={() => selectImage(pic4)}
              alt="imagen producto"
              src="https://freepngimg.com/thumb/potato/7-potato-png-images-pictures-download.png"
            />
          </div>
          <img
            className={styles.image}
            src="https://pngimg.com/uploads/salad/salad_PNG2819.png"
            alt="imagen producto"
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Titulo producto</h1>
          <p className={styles.price}>25 euros</p>
          <ItemCount />
          <button className={styles.cartButton}>
            Añadir al carrito
            <svg
              className={styles.cartIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>

          <button className={styles.wishButton}>
            Lista de deseos
            <svg
              className={styles.wishIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <p className={styles.tags}>Etiquetas</p>
          <section className={styles.descriptionContainer}>
            <h2 className={styles.descriptionTitle}>Detalles del producto:</h2>
            <p className={styles.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              atque architecto tempore quasi voluptatibus animi culpa similique
              alias deserunt debitis quam minus, autem, recusandae mollitia
              velit cupiditate nemo incidunt quas!
            </p>
          </section>
        </div>
      </section>
      <p className={styles.relatedProducts}>Productos relacionados</p>
    </div>
  );
}
