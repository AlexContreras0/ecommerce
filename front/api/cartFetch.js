export const addProductToCart = async (bodyParam) => {
  const response = await fetch("http://localhost:9000/carts/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyParam,
  });
  const productCreated = await response.json();
  if (productCreated.error) {
    return productCreated.error;
  }
  console.log(productCreated);
  return;
};

export const getCartById = async (id) => {
  const response = await fetch("http://localhost:9000/carts/" + id);
  const cart = await response.json();
  if (cart.status == "failed") {
    return;
  }
  return cart
};

// Hay que arreglar el token y refresh token para que se pasen por parámetros de la forma correcta
// También hay que quitar del userlocalstorage los datos sensibles del cliente y dejar solo el id, token y refresh
// Y cuando necesitemos los datos del cliente, hacer una llamada a la bbdd
// Hay que añadir el Verifytoken cuando funcione a todos los router que lo necesiten

export const addNewProductToCart = async (id, bodyParam) => {
  const response = await fetch("http://localhost:9000/carts/" + id);
  const cartExisted = await response.json();
  if (cartExisted.status == "failed") {
    const responseAdd = await fetch("http://localhost:9000/carts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("Token"),
        // "auth-token-refresh": localStorage.getItem("Refresh_Token"),
      },
      body: bodyParam,
    });
    const productCreated = await responseAdd.json();
    console.log(productCreated);
    return productCreated;
  } else if (cartExisted.status == "succeeded") {
    const responseUpdating = await fetch("http://localhost:9000/carts/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyParam,
    });

    const cartUpdated = await responseUpdating.json();
    if (cartUpdated.error) {
      console.log(cartUpdated.error);
    }
    return cartUpdated;
  }
};

export const deleteCartProduct = async (idUser, bodyParam) => {
  const responseIfUser = await fetch("http://localhost:9000/carts/" + idUser);
  const cartExisted = await responseIfUser.json();
  if (cartExisted.status == "succeeded") {
    const idCart = cartExisted.data._id
  const response = await fetch("http://localhost:9000/carts/deleteProduct/" + idCart, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: bodyParam,
  })
  const productDelete = await response.json()
  if(productDelete.error) {
    console.log(productDelete.error)
    alert("No se ha podido borrar el producto del carrito")
    return
  }
  alert("El producto ha sido borrado del carrito")
  return
}
}
