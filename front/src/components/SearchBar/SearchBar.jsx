import React, { useState, useEffect, use } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // funcion para traer los datos
  const getResults = async () => {
    const response = await fetch(
      `http://localhost:3000/api/products?name=${search}`
    );
    const data = await response.json();
    setResults(data);
  };

  // Funcion de busqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // Metodo de filtrado 1
  if (!search) {
    return results;
  } else {
    results.filter((product) => {
      return product.productName.toLowerCase().includes(search.toLowerCase());
    });
  }

  useEffect(() => {
    getResults();
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Buscar"
      />

      {results.map((product) => {
        return (
          <div>
            <h2>{product.productName}</h2>
            <p>{product.productPrice}</p>
          </div>
        );
      })}
    </div>
  );
}
