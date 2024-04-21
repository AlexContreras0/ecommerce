import React from 'react'
import { deleteCartProduct } from '../../../api/cartFetch'
import { useRouter } from "next/router"
import { json } from 'react-router-dom';

export default function DeleteCartComponent(props) {

const router = useRouter();
const { idUser, idProduct } = props;

const handleDeleteCartProduct = async () => {
       await deleteCartProduct(idUser, JSON.stringify({idProduct}))
      router.back()
  }

  return (
    <div>
    <div>
    <button onClick={handleDeleteCartProduct}>Eliminar producto</button>
    </div>      
    </div>
  )
}
