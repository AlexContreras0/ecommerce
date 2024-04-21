import React, { useEffect, useState } from "react";
import { deleteCartProduct, getCartById } from "../../../api/cartFetch";
import { getProduct } from "../../../api/productFetch";
import { useRouter } from "next/router";
import DeleteCartComponent from "../DeleteCartComponent/DeleteCartComponent";


export default function CartComponent() {
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [cart, setCart] = useState([]);
  const [productsCart, setProductsCart] = useState({})
  const [cartComplet, setCartComplet] = useState(false)
  const router = useRouter();

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
            
            
          }
        );
        cartAux.cartProducts = productData.data
        
      };
      await loadCartWithPrice();

      const cartSeted = async () => {
      setCart(cartAux.data);
      setCartComplet(true)
      }
      setTimeout(() => {cartSeted()}, 300); 


    };
    loadData();
  }, []);

  return (
    <div>
      <h2>Estos son los productos de tu carrito</h2>
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
                <span>Nombre:</span>
                {product.productName}
                <br />
                <span>Descripción:</span>
                {product.productDescription}
                <br />
                <span>Valoración:</span>
                {product.productRating}
                <br />
                <span>Imagen:</span>
                {product.productImage}
                <br />
                <span>Cantidad: </span>
                {product.cartProductQuantity}
                <br />
                <span>Precio:</span>
                {product.productPrice}
                <br />
                <DeleteCartComponent idUser = {userLocalStorage.data.user._id} idProduct={product.productId}/>
                <br />
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
