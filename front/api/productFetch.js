export const getAllProducts = async () => {
    const response = await fetch("http://localhost:9000/products");
    const products = await response.json();
    return products;
};

export const getProduct = async (id) => {
    const response = await fetch("http://localhost:9000/products/" + id);
    const product = await response.json();
    return product;
};

export const deleteProduct = async (id) => {
    const response = await fetch("http://localhost:9000/products/" + id, {
        method: "DELETE",
    });
    const productDelete = await response.json();
    if (productDelete.error) {
        console.log(productDelete.error);
        return;
    }
    console.log("Deleted");
    return;
};

export const updateProduct = async (id, bodyParam) => {
    const response = await fetch("http://localhost:9000/products/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: bodyParam,
    });
    const productUpdated = await response.json();
    if (productUpdated.error) {
        console.log(productUpdated.error);
        return;
    }

    return;
};

export const createProduct = async (bodyParam) => {
    const response = await fetch("http://localhost:9000/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: bodyParam,
    });
    const productCreated = await response.json();
    if (productCreated.error) {
        return productCreated.error;
    }

    return;
};
