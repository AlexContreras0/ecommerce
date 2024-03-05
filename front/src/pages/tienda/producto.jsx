import NavMenu from "@/components/NavMenu/NavMenu";
import ProductComponent from "@/components/ProductComponent/ProductComponent";
import React, { useEffect, useState } from "react";
import { getProduct } from "../../../api/productFetch";
import { useRouter } from "next/router";

export default function producto() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProducts] = useState("")

    useEffect(() => {
      const loadProduct = async () => {
      const productAux = await getProduct(id)
      setProducts(productAux)
      }
      loadProduct()
    }, [id])

  return (
    <>
      <NavMenu />
      <ProductComponent id={id} product={product}/>
    </>
  );
}
