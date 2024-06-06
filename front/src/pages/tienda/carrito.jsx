import React, { useEffect, useState } from "react";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import ClienteComponent from "@/components/ClienteComponent/ClienteComponent";
import LoginFormAddComponent from "@/components/LoginFormAddComponent/LoginFormAddComponent";
import CartComponent from "@/components/CartComponent/CartComponent";

export default function Carrito() {
  const [isUserLoged, setIsUserLoged] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isUserLogedLocalStorage = JSON.parse(
        localStorage.getItem("isUserLogedLStorage")
      );
      setIsUserLoged(isUserLogedLocalStorage);
    }
  }, []);

  return (
    <div>
      {isUserLoged ? (
        <>
          <ClienteComponent />
          <CartComponent />
        </>
      ) : (
        <LoginFormAddComponent
          isUserLoged={isUserLoged}
          setIsUserLoged={setIsUserLoged}
        />
      )}

      <FooterComponent />
    </div>
  );
}
