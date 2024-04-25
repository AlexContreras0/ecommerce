import React, { useEffect, useState } from "react";
import styles from "./ProductComponent.module.css";
import ItemCount from "../ItemCount/ItemCount";
import StarRatingComponent from "../StarRatingComponent/StarRatingComponent";
import LoginForm from "../LoginForm/LoginForm";
import LoginFormAddComponent from "../LoginFormAddComponent/LoginFormAddComponent";
import { addNewProductToCart, addProductToCart } from "../../../api/cartFetch";

export default function ProductComponent(props) {
  const { product, isUserLoged, setIsUserLoged, token, setToken } = props;
  const [count, setCount] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);

  let userLocalStorage = JSON.parse(localStorage.getItem("user"));
  let idUserLocalStorage = JSON.parse(localStorage.getItem("idUser"));
  let tokenLocalStorage = JSON.parse(localStorage.getItem("token"));
  let tokenRefreshLocalStorage = JSON.parse(
    localStorage.getItem("tokenRefresh")
  );
  console.log(userLocalStorage.data.user._id, product._id);

  const selectImage = (index) => {
    setImageIndex(index);
  };

  const addToCart = async () => {
    if (count == 0) {
      alert("Debe de seleccionar una cantidad");
    } else {
      if (isUserLoged) {
        const token = localStorage.getItem("token");
        const tokenRefresh = localStorage.getItem("tokenRefresh");
        console.log("este es el Token y el tokenRefresh", token, tokenRefresh);
        const cart = await addNewProductToCart(
          userLocalStorage.data.user._id,
          JSON.stringify({
            idUser: userLocalStorage.data.user._id,
            idProduct: product._id,
            quantity: count,
          })
        );
        if (cart.status == "succeded") {
          alert("El producto ha sido añadido al carrito");
        }
      } else {
        alert("No se ha podido añadir el producto al carrito al carrito");
      }
    }
  };

  const addToWishList = () => {
    // Hacer logica para añadir a la lista de deseos
  };

  return (
    <div className={styles.body}>
      <section className={styles.container}>
        <div className={styles.imageContainer}>
          {product.productImage && product.productImage.length > 0 ? (
            <>
              <div className={styles.imageDetailsContainer}>
                {product.productImage.map((img, index) => (
                  <img
                    key={index}
                    className={styles.imageDetails}
                    onClick={() => selectImage(index)}
                    alt="imagen producto"
                    src={img}
                  />
                ))}
              </div>
              <img
                className={styles.image}
                src={product.productImage[imageIndex]}
                alt="imagen producto"
              />
            </>
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{product.productName}</h1>
          <p className={styles.price}>{product.productPrice}€</p>
          <div className={styles.imageContainerMobile}>
            {product.productImage && product.productImage.length > 0 ? (
              <>
                <img
                  className={styles.imageMobile}
                  src={product.productImage[imageIndex]}
                  alt="imagen producto"
                />
                <div className={styles.imageDetailsContainerMobile}>
                  {product.productImage.map((img, index) => (
                    <img
                      key={index}
                      className={styles.imageDetailsMobile}
                      onClick={() => selectImage(index)}
                      alt="imagen producto"
                      src={img}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p>No hay imágenes disponibles</p>
            )}
          </div>
          <p className={styles.cantidad}>
            Elige la cantidad:{" "}
            <ItemCount product={product} count={count} setCount={setCount} />
          </p>

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
    </div>
  );
}
