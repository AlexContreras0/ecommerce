import NavMenu from "@/components/NavMenu/NavMenu";
import React, { useState } from "react";

export default function cliente(props) {
  const {id, nombre, address, phone } = props


  return (
    <div>
      <NavMenu />
    </div>
  );
}
