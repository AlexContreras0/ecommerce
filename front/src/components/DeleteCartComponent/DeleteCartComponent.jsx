import React from "react";
import { deleteCartProduct } from "../../../api/cartFetch";
import { useRouter } from "next/router";
import { json } from "react-router-dom";
import styles from "./DeleteCartComponent.module.css";

export default function DeleteCartComponent(props) {
  const router = useRouter();
  const { idUser, idProduct } = props;

  const handleDeleteCartProduct = async () => {
    await deleteCartProduct(idUser, JSON.stringify({ idProduct }));
    router.push("/");
  };

  return (
    <div>
      <button className={styles.deleteButton} onClick={handleDeleteCartProduct}>
        Eliminar producto
      </button>
    </div>
  );
}
