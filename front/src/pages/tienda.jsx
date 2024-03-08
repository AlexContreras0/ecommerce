import NavMenu from "@/components/NavMenu/NavMenu";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productFetch";
import styles from "@/styles/tienda.module.css";
import ListProductComponent from "@/components/ProductComponent/ListProductComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

export default function tienda() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProductsAux = async () => {
      let productsAux = await getAllProducts();
      setProducts(productsAux.data);
    };
    getAllProductsAux();
  }, []);

  console.log(products);

  return (
    <div>
      <NavMenu />

      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <p>Barra de busqueda</p>
          <p>filtro por categorias</p>
          <p>filtro por precio</p>
        </div>
        <div className={styles.productContainer}>
          {products.map((product, index) => {
            return (
              <div key={index}>
                <ListProductComponent
                  idParam={product.id}
                  nombreParam={product.nombre}
                  priceParam={product.precio}
                  tipoParam={product.tipo}
                  descriptionParam={product.description}
                  stockParam={product.stock}
                  ratingParam={product.rating}
                  imagenParam={product.imagen}
                />
              </div>
            );
          })}
        </div>
      </div>

      <PaginationComponent />
      <FooterComponent />
    </div>
  );
}
