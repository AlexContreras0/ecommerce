import React, { useEffect, useState } from "react";
import styles from "./ProductComponent.module.css";
import ItemCount from "../ItemCount/ItemCount";
import StarRatingComponent from "../StarRatingComponent/StarRatingComponent";
import LoginForm from "../LoginForm/LoginForm";
import LoginFormAddComponent from "../LoginFormAddComponent/LoginFormAddComponent";
import ProductComponent from "./ProductComponent";

export default function ProductDetailComponent(props) {
  const { product } = props;
  const [image, setImage] = useState();
  // const [token, setToken] = useState(false);
  const [isUserLoged, setIsUserLoged] = useState(false);

  const userLocalStorage = JSON.parse(localStorage.getItem('user'))
  const isUserLogedLocalStorage = JSON.parse(localStorage.getItem('isUserLogedLStorage'))

 

   useEffect(() => {
    setIsUserLoged(isUserLogedLocalStorage)
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
          // token={token}
          // setToken={setToken}
        />
      ) : (
        <LoginFormAddComponent
          product={product}
          isUserLoged={isUserLoged}
          setIsUserLoged={setIsUserLoged}
          // token={token}
          // setToken={setToken}
          user ={user}
          setUser ={setUser}
          userData={userData}
          setUserData={setUserData}
          roleUser = {roleUser}
          setRoleUser= {setRoleUser}
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
