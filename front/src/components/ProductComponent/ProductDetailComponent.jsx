import React, { useEffect, useState } from "react";
import LoginFormAddComponent from "../LoginFormAddComponent/LoginFormAddComponent";
import ProductComponent from "./ProductComponent";

export default function ProductDetailComponent(props) {
  const { product } = props;
  const [image, setImage] = useState();
  // const [token, setToken] = useState(false);
  const [isUserLoged, setIsUserLoged] = useState(false);

  let idUserLocalStorage = JSON.parse(localStorage.getItem("idUser"));
  let tokenLocalStorage = JSON.parse(localStorage.getItem("token"));
  let tokenRefreshLocalStorage = JSON.parse(
    localStorage.getItem("tokenRefresh")
  );

  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const isUserLogedLocalStorage = JSON.parse(
    localStorage.getItem("isUserLogedLStorage")
  );

  useEffect(() => {
    setIsUserLoged(isUserLogedLocalStorage);
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState([]);
  const [roleUser, setRoleUser] = useState(false);
  const [roleSupplier, setRoleSupplier] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      {isUserLoged ? (
        <ProductComponent
          product={product}
          isUserLoged={isUserLoged}
          setIsUserLoged={setIsUserLoged}
        />
      ) : (
        <LoginFormAddComponent
          product={product}
          isUserLoged={isUserLoged}
          setIsUserLoged={setIsUserLoged}
          user={user}
          setUser={setUser}
          userData={userData}
          setUserData={setUserData}
          roleUser={roleUser}
          setRoleUser={setRoleUser}
          roleSupplier={roleSupplier}
          setRoleSupplier={setRoleSupplier}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          error={error}
          setError={setError}
        />
      )}
    </div>
  );
}
