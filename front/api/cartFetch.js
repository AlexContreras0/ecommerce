
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