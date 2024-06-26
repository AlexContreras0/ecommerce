import React, { useEffect, useState } from "react";
import { getProduct } from "../../../api/productFetch";
import { useRouter } from "next/router";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import ProductDetailComponent from "@/components/ProductComponent/ProductDetailComponent";

export default function producto() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      const productAux = await getProduct(id);
      setProduct(productAux.data);
    };
    loadProduct();
  }, []);

  return (
    <>
      {product && <ProductDetailComponent product={product} />}
      <FooterComponent />
    </>
  );
}
