import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  //setear los hooks useState
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  //función para traer los datos de la API
  const URL = "http://localhost:9000/products/";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data)
    setProducts(data);
  };

  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado
  const results = !search
    ? products
    : products.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  //renderizamos la vista
  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      />
      <div>
        {Object.keys(results).map((key) => (
          <p key={results[key].id}>
            <p>{results[key].productName}</p>
          </p>
        ))}
      </div>
    </div>
  );
};
export default SearchComponent;
