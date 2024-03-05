import NavMenu from "../components/NavMenu/NavMenu";
import React, { useState } from "react";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function signUpUser() {
  return (
    <div>
      <NavMenu />
      <RegisterForm />
    </div>
  );
}
