import NavMenu from "@/components/NavMenu/NavMenu";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productFetch";
import styles from "@/styles/tienda.module.css";
import ListProductComponent from "@/components/ProductComponent/ListProductComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

export default function tienda() {
  const [products, setProducts] = useState([]);
  const [allProductsLength, setAllProductsLength] = useState(0);
  const [firstElementPage, setFirstElementPage] = useState(0);
  const [elementForPage, setElementForPage] = useState(12);
  const [inputSearched, setInputSearched] = useState("");

  useEffect(() => {
    if (inputSearched == "") {
      const getAllProductsAux = async () => {
        let productsAux = await getAllProducts();
        setAllProductsLength(productsAux.data.length);
        const productForPage = productsAux.data.filter(
          (elemento, index) =>
            index > firstElementPage - 1 &&
            index < firstElementPage + elementForPage
        );
        setProducts(productForPage);
      };
      getAllProductsAux();
    } else {
      const getAllProductsAux = async () => {
        let productsAux = await getAllProducts();
        const inputToLower = inputSearched.toLowerCase();
        const productsFiltered = productsAux.data.filter((element) =>
          element.nombre.toLowerCase().includes(inputToLower)
        );
        setAllProductsLength(productsFiltered.length);
        const productsForPage = productsFiltered.filter(
          (elemento, index) =>
            index > firstElementPage - 1 &&
            index < firstElementPage + elementForPage
        );
        setProducts(productsForPage);
      };
      getAllProductsAux();
    }
  }, [firstElementPage]);

  const refreshProductsHandler = async () => {
    const vacio = "";
    setInputSearched(vacio);
    let productsAux = await getAllProducts();
    setAllProductsLength(productsAux.data.length);
    const productForPage = productsAux.data.filter(
      (elemento, index) =>
        index > firstElementPage - 1 &&
        index < firstElementPage + elementForPage
    );
    setProducts(productForPage);
  };

  const searchedHandler = (e) => {
    e.preventDefault();
    const getAllProductsAux = async () => {
      let productsAux = await getAllProducts();
      const inputToLower = inputSearched.toLowerCase();
      const selectSearched = productsAux.data.filter((element) =>
        element.nombre.toLowerCase().includes(inputToLower)
      );
      setAllProductsLength(selectSearched.length);
      setFirstElementPage(0);
      const productForPage = selectSearched.filter(
        (elemento, index) => index >= firstElementPage && index < elementForPage
      );
      setProducts(productForPage);
    };
    getAllProductsAux();
  };

  const nextPageHandler = () => {
    if (firstElementPage + elementForPage < allProductsLength) {
      setFirstElementPage(firstElementPage + elementForPage);
    }
  };

  const previousPageHandler = () => {
    if (firstElementPage < 12) {
      setFirstElementPage(0);
    } else {
      setFirstElementPage(firstElementPage - elementForPage);
    }
  };

  return (
    <div>
      <NavMenu />

      <div className={styles.backBox}>
        <div className={styles.box}>
          <div className={styles.container}>
            <div className={styles.filterContainer}>
              <form className={styles.formFilter} onSubmit={searchedHandler}>
                <input
                  className={styles.inputFilter}
                  type="text"
                  name="inputSearched"
                  placeholder="Buscar"
                  onChange={(e) => setInputSearched(e.target.value)}
                />
                <button className={styles.buttonFilter} type="submit">
                  <svg className={styles.iconFilter} viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </form>
              {/*
              <input
              type="button"
                placeholder="Buscar"
                onClick={searchedHandler}
                value={inputSearched}
              ></input> */}
              <button
                className={styles.buttonRefresh}
                onClick={refreshProductsHandler}
              >
                Borrar búsqueda
              </button>
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
        </div>
        <div className={styles.containerPagination}>
          <button
            onClick={previousPageHandler}
            className={styles.paginationLink}
            href="/"
          >
            <svg
              className={styles.svg}
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
                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"></path>{" "}
              </g>
            </svg>
          </button>
          <p className={styles.text}>Página actual</p>
          <button
            onClick={nextPageHandler}
            className={styles.paginationLink}
            href="/"
          >
            <svg
              className={styles.svg}
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
                <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* <PaginationComponent /> */}
      <FooterComponent />
    </div>
  );
}
