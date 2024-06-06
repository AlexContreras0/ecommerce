import React, { useEffect, useState } from "react";
import { deleteCartProduct, getCartById } from "../../../api/cartFetch";
import { getProduct } from "../../../api/productFetch";
import { useRouter } from "next/router";
import DeleteCartComponent from "../DeleteCartComponent/DeleteCartComponent";
import styles from "./CartComponent.module.css";

export default function CartComponent() {
  const router = useRouter();
  const userLocalStorage =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  const [cart, setCart] = useState([]);
  const [productsCart, setProductsCart] = useState({});
  const [cartComplet, setCartComplet] = useState(false);

  useEffect(() => {
    if (!userLocalStorage) return; // Ensure userLocalStorage is defined

    let cartAux = {};
    let productData = {};
    let cartProductWithPriceAndImage = [];
    const loadData = async () => {
      const loadCart = async () => {
        cartAux = await getCartById(userLocalStorage.data.user._id);
      };
      await loadCart();
      const loadCartWithPrice = async () => {
        cartProductWithPriceAndImage = cartAux.data.cartProducts.map(
          async (product) => {
            productData = await getProduct(product.productId);
            product.productName = productData.data.productName;
            product.productPrice = productData.data.productPrice;
            product.productImage = productData.data.productImage[0];
            product.productDescription = productData.data.productDescription;
            product.productRating = productData.data.productRating;
          }
        );
        await Promise.all(cartProductWithPriceAndImage);
        cartAux.cartProducts = productData.data;
      };
      await loadCartWithPrice();

      const cartSeted = async () => {
        setCart(cartAux.data);
        setCartComplet(true);
      };

      await cartSeted();
    };
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        <h2 className={styles.titleCart}>
          Estos son los productos de tu carrito
        </h2>
        <div className={styles.data}>
          <p>Fecha: </p>
          {cart && cart.cartDate
            ? new Date(cart.cartDate).toLocaleString()
            : ""}
        </div>

        <div className={styles.cartDataContainer}>
          <div className={styles.cartData}>
            <p>Estado:</p>
            {cart && cart.cartStatus ? cart.cartStatus : ""}
          </div>
          <div className={styles.cartData}>
            <p>Precio total:</p>
            {cart && cart.cartTotalPrice ? `${cart.cartTotalPrice}€` : ""}
          </div>
        </div>
      </div>

      {cart && cart.cartProducts && cartComplet && (
        <div className={styles.productDataContainer}>
          {cart.cartProducts.map((product, index) => {
            return (
              <div className={styles.infoContainer} key={index}>
                <div className={styles.productInfoContainer}>
                  <div className={styles.data}>
                    <p>Nombre: </p>
                    {product.productName}
                  </div>
                  <div className={styles.data}>
                    <p>Descripción:</p>
                    {product.productDescription}
                  </div>
                  <div className={styles.data}>
                    <p>Valoración:</p>
                    {product.productRating} / 10
                  </div>
                  <div className={styles.data}>
                    <p>Cantidad:</p>
                    {product.cartProductQuantity}
                  </div>
                  <div className={styles.data}>
                    <p>Precio:</p>
                    {product.productPrice}€
                  </div>
                  <DeleteCartComponent
                    idUser={userLocalStorage.data.user._id}
                    idProduct={product.productId}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.productImage}
                    src={product.productImage}
                    alt={product.productName}
                  />
                  <div className={styles.idProduct}>{product.productId}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
