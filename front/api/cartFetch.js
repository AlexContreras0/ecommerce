
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

export const addNewProductToCart = async (id, bodyParam) => {
    const response = await fetch("http://localhost:9000/carts/" + id);
    const cartExisted = await response.json();
    console.log(cartExisted, "este es el cartExisted")
    if (cartExisted.status == "failed") {
        const responseAdd = await fetch("http://localhost:9000/carts/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodyParam,
        });

        //falta el else haciendo la lógica de cuando existe al carrito con un update del carrito
        const productCreated = await responseAdd.json();

        console.log(productCreated);
        return productCreated.error;
    }
    return;
};