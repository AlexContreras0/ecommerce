import React, { useState } from "react";
import Link from "next/link";
import { getUsers, login } from "../../../api/userFetch";
import styles from "./LoginForm.module.css";
import cliente from "../ClienteComponent/ClienteComponent";

export default function LoginFormAddComponent(props) {

  // const isUserLogedLocalStorage = JSON.parse(localStorage.getItem('isUserLogedLStorage'))
  // const userLocalStorage = JSON.parse(localStorage.getItem('user'))

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  

  const {
    product,
    isUserLoged,
    setIsUserLoged,
    token,
    setToken,
    userData,
    setUserData,
    showPassword,
    setShowPassword,
    error,
    setError,
  } = props;


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const getUserLoged = async () => {
          const userData = await login(JSON.stringify(user));
          if (userData.status == "Success") {
            localStorage.setItem('user', JSON.stringify(userData)) 
            localStorage.setItem('isUserLogedLStorage', JSON.stringify(true))
            const isUserLogedLocalStorage = JSON.parse(localStorage.getItem('isUserLogedLStorage'))
            setIsUserLoged(true)
            } else {
              alert("Usuario y contraseña erróneos");
              localStorage.setItem('isUserLogedLStorage', JSON.stringify(false))
              const isUserLogedLocalStorage = JSON.parse(localStorage.getItem('isUserLogedLStorage'))
            } 
        };
        getUserLoged();
      } catch (error) {
        console.log(error);
        alert("Usuario y contraseña erróneos");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const validateForm = () => {
    if (user.password.length < 8 || user.email.length < 8) {
      setError("Email o contraseña incorrectos");
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.container}>
          <h2 className={styles.title}>Inicia sesión</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              className={styles.field}
              value={user.email}
              onChange={handleInputChange}
            />
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                name="password"
                className={styles.field}
                value={user.password}
                onChange={handleInputChange}
              />
              <div
                className={styles.passwordIconContainer}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className={styles.passwordIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    className={styles.passwordIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                )}
              </div>
            </div>
            <Link className={styles.passwordLink} href="/recuperar-contrasena">
              Recordar contraseña
            </Link>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.submitButton}>
              Iniciar sesión
            </button>
          </form>
          <div className={styles.signUp}>
            <p>¿Aún no tienes cuenta?</p>
            <Link className={styles.link} href="/registro-usuario">
              Regístrate aquí
            </Link>
          </div>

          {/* {roleUser && (
              <cliente
                id={user.id}
                nombre={user.userName}
                address={user.userAddress}
                phone={user.userPhone}
              />
            )} */}
        </div>
      </div>
    </div>
  );
}
