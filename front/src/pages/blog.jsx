import ClienteComponent from "@/components/ClienteComponent/ClienteComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import LoginFormAddComponent from "@/components/LoginFormAddComponent/LoginFormAddComponent";
import NavMenu from "@/components/NavMenu/NavMenu";
import NavMenu2 from "@/components/NavMenu/NavMenu";
import React, { useEffect, useState } from "react";

export default function page() {

  const isUserLogedLocalStorage = JSON.parse(localStorage.getItem('isUserLogedLStorage'))
  const [isUserLoged, setIsUserLoged] = useState(false)

  return (
    <div>
      <NavMenu />
      {isUserLoged ? (<ClienteComponent/>): (
        <LoginFormAddComponent
          // product={product}
          isUserLoged={isUserLoged}
          setIsUserLoged={setIsUserLoged}
          // token={token}
          // setToken={setToken}
          // user ={user}
          // setUser ={setUser}
          // userData={userData}
          // setUserData={setUserData}
          // roleUser = {roleUser}
          // setRoleUser= {setRoleUser}
          // roleSupplier={roleSupplier}
          // setRoleSupplier={setRoleSupplier}
          // showPassword={showPassword}
          // setShowPassword={setShowPassword}
          // error={error}
          // setError={setError}
        />
      ) }
      
      <FooterComponent />
    </div>
  );
}
