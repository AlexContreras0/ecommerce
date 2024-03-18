import React, { useEffect, useState } from "react";
import styles from "./ProductComponent.module.css";
import ItemCount from "../ItemCount/ItemCount";
import StarRatingComponent from "../StarRatingComponent/StarRatingComponent";
import LoginForm from "../LoginForm/LoginForm";
import LoginFormAddComponent from "../LoginFormAddComponent/LoginFormAddComponent";

export default function ProductComponent(props) {

  const { product, isUserLoged, setIsUserLoged, token, setToken } = props;
  const [count, setCount] = useState(0);

  const [image, setImage] = useState();


  const selectImage = (img) => {
    setImage(img);
  };

  const addToCart = () => {
    if (isUserLoged) {
      const userLocalStorage = JSON.parse(localStorage.getItem('user'))
      

      
    }
  };

  const addToWishList = () => {
    // Hacer logica para añadir a la lista de deseos
  };

  return (
    <div className={styles.body}>
      <section className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageDetailsContainer}>
            {product.productImage ? (
              <img
                className={styles.imageDetails}
                onClick={() => selectImage(product.productImage[0])}
                alt="imagen producto"
                src={product.productImage[0]}
              />
            ) : (
              <p>Imagen no disponible</p>
            )}
            {product.productImage ? (
              <img
                className={styles.imageDetails}
                onClick={() => selectImage(product.productImage[1])}
                alt="imagen producto"
                src={product.productImage[1]}
              />
            ) : (
              <p>Imagen no disponible</p>
            )}
            {product.productImage ? (
              <img
                className={styles.imageDetails}
                onClick={() => selectImage(product.productImage[0])}
                alt="imagen producto"
                src={product.productImage[0]}
              />
            ) : (
              <p>Imagen no disponible</p>
            )}
            {product.productImage ? (
              <img
                className={styles.imageDetails}
                onClick={() => selectImage(product.productImage[1])}
                alt="imagen producto"
                src={product.productImage[1]}
              />
            ) : (
              <p>Imagen no disponible</p>
            )}
          </div>
          {product.productImage && image ? (
            <img className={styles.image} src={image} alt="imagen producto" />
          ) : (
            <p>Selecciona una imagen</p>
            // <img
            //   className={styles.imageDetails}
            //   onClick={() => selectImage(product.productImage[1])}
            //   alt="imagen producto"
            //   src={product.productImage[1]}
            // />
          )}
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{product.productName}</h1>
          <p className={styles.price}>
            {product.productPrice}
            <svg
              className={styles.euroIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
            </svg>
          </p>
          <ItemCount 
          product={product}
          count={count}
          setCount={setCount}
          />
          <button className={styles.cartButton} onClick={addToCart}>
            Añadir al carrito
            <svg
              className={styles.cartIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <button className={styles.wishButton} onClick={addToWishList}>
            Lista de deseos
            <svg
              className={styles.wishIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <StarRatingComponent />
          <p className={styles.tags}>
            <svg
              className={styles.tagIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Categorías: {product.productCategory}
          </p>
          <section className={styles.descriptionContainer}>
            <h2 className={styles.descriptionTitle}>Detalles del producto:</h2>
            <p className={styles.description}>{product.productDescription}</p>
          </section>
        </div>
      </section>
      <p className={styles.relatedProducts}>Productos relacionados</p>
      
    </div>
  );
}
