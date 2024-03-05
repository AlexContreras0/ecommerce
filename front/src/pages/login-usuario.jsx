import NavMenu from "../components/NavMenu/NavMenu";
import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";

export default function loginUser() {
  return (
    <div>
      <NavMenu />
      <LoginForm />
    </div>
  );
}
