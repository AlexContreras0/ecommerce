import NavMenu from "@/components/NavMenu/NavMenu";
import ProductComponent from "@/components/ProductComponent/ProductComponent";
import React, { useEffect, useState } from "react";
import { getProduct } from "../../../api/productFetch";
import { useRouter } from "next/router";

export default function producto() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState([])

  console.log(id)

    useEffect(() => {
      const loadProduct = async () => {
      const productAux = await getProduct(id)
      setProduct(productAux.data)
      console.log("esto es el productAux", productAux)
      console.log("esto es el producto del seteo", product)
      }
      loadProduct()
    }, [id])

  return (
    <>
      <NavMenu />
      {product && <ProductComponent product={product}/>}
    </>
  );
}
