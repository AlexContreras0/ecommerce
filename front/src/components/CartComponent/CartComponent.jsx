import React from 'react'

export default function CartComponent() {

    const userLocalStorage = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      <h2>Estos son los datos del carrito</h2>
    </div>
  )
}
