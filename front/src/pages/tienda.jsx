import NavMenu from "@/components/NavMenu/NavMenu";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productFetch";
import ListProductComponent from "@/components/ProductComponent/ListProductComponent";

export default function tienda() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProductsAux = async () => {
      let productsAux = await getAllProducts();
      setProducts(productsAux.data);
    };
    getAllProductsAux();
  }, []);

  console.log("Productos")

  return (
    <div>
      <NavMenu />
      <h1>Productos</h1>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <ListProductComponent idParam={product.id} nombreParam={product.nombre} />
          </div>
        );
      })}

    </div>
  );
}