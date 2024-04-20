import React, { useEffect, useState } from "react";
import { getCartById } from "../../../api/cartFetch";
import { getProduct } from "../../../api/productFetch";

export default function CartComponent() {
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [cart, setCart] = useState([]);
  const [productsCart, setProductsCart] = useState({})
  const [cartComplet, setCartComplet] = useState(false)

  useEffect(() => {
    let cartAux = {};
    let productData = {};
    let cartProductWithPriceAndImage = []
    const loadData = async () => {
      const loadCart = async () => {
        cartAux = await getCartById(userLocalStorage.data.user._id);
        
      };
      await loadCart();
      const loadCartWithPrice = async () => {
        cartProductWithPriceAndImage = cartAux.data.cartProducts.map(
          async (product) => {
            productData = await getProduct(product.productId);
            product.productName = productData.data.productName
            product.productPrice = productData.data.productPrice
            product.productImage = productData.data.productImage[0]
            product.productDescription = productData.data.productDescription
            product.productRating = productData.data.productRating
            console.log(product, productData, "ESTE ES EL PRODUCT CON TODOS LOS DATOS");
            
          }
        );
        cartAux.cartProducts = productData.data
        
      };
      await loadCartWithPrice();

      const cartSeted = async () => {
      setCart(cartAux.data);
      setCartComplet(true)
      console.log("ESTE ES EL CART", cart)
      }
      await cartSeted()
    };
    loadData();
  }, []);


  return (
    <div>
      <h2>Estos son los datos del carrito</h2>
      {cart.cartProducts && cartComplet && (
        <div>
          <span>Fecha creación del carrito: </span>
          {cart.cartDate}
          <br />
          {cart.cartProducts.map((product, index) => {
            return (
              <div key={index}>
                <span>Id producto: </span>
                {product.productId}
                <br />
                <span>Cantidad: </span>
                {product.cartProductQuantity}
                <br />
                <span>Precio:</span>
                {product.productPrice}
                <br />
                <span>Nombre:</span>
                {product.productName}
              </div>
            );
          })}
          <br />
          <span>Estado del carrito: </span>
          {cart.cartStatus}
          <br />
          <span>Precio total del carrito: </span>
          {cart.cartTotalPrice}
        </div>
      )}
    </div>
  );
}
