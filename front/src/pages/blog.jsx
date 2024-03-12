import ClienteComponent from "@/components/ClienteComponent/ClienteComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import NavMenu2 from "@/components/NavMenu/NavMenu";
import React from "react";

export default function page() {
  return (
    <div>
      <NavMenu />
      <ClienteComponent />
      <FooterComponent />
    </div>
  );
}
