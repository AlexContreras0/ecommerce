import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import React, { useEffect, useState } from "react";

export default function page() {

  const isUserLogedLocalStorage = JSON.parse(localStorage.getItem('isUserLogedLStorage'))
  const [isUserLoged, setIsUserLoged] = useState(false)

  return (
    <div>
      <NavMenu />
      
      <FooterComponent />
    </div>
  );
}