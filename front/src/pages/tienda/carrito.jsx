import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import ClienteComponent from "@/components/ClienteComponent/ClienteComponent";
import LoginFormAddComponent from "@/components/LoginFormAddComponent/LoginFormAddComponent";
import React, { useEffect, useState } from "react";
import CartComponent from "@/components/CartComponent/CartComponent";

export default function carrito() {

  const isUserLogedLocalStorage = JSON.parse(localStorage.getItem('isUserLogedLStorage'))
  const [isUserLoged, setIsUserLoged] = useState(true)

  return (
    <div>
      <NavMenu />
      {isUserLoged ? (<ClienteComponent/>): (
        <LoginFormAddComponent
          isUserLoged={isUserLoged}
          setIsUserLoged={setIsUserLoged}
        />
      ) }
      {isUserLoged ? (<CartComponent/>): (
        <LoginFormAddComponent
          isUserLoged={isUserLoged}
          setIsUserLoged={setIsUserLoged}
        />
      ) }
      
      <FooterComponent />
    </div>
  );
}