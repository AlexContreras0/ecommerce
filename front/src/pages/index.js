import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import React from "react";

export default function Home() {
  // localStorage.setItem('isUserLogedLStorage', JSON.stringify(false))
  // const isUserLogedLocalStorage = JSON.parse(localStorage.getItem('isUserLogedLStorage'))
  // console.log("este es el isuserloged del home", isUserLogedLocalStorage )
  return (
    <>
      <NavMenu />
      <FooterComponent />
    </>
  );
}
