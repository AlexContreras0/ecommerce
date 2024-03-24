import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import Link from "next/link";
import { createUser } from "../../../api/userFetch";
import { useRouter } from "next/router";
import FooterComponent from "../FooterComponent/FooterComponent";

export default function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cp: "",
    province: "",
    password: "",
    locality: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
    console.log(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await createUser(JSON.stringify(newUser));
        // logica para enviar los datos a la API
        // const response = await createUser(newUser);
        console.log("este es el response", response);

        if (!response) {
          setNewUser({
            name: "",
            email: "",
            phone: "",
            address: "",
            cp: "",
            province: "",
            password: "",
            locality: "",
          });
          setError(null);
          alert("El usuario ha sido creado correctamente");
          router.back();
        } else {
          throw new Error("Error al crear el usuario");
        }
      } catch (error) {
        console.error("Error al crear el usuario:", error);
        setError("Error al crear el usuario. Por favor, inténtalo de nuevo.");
      }
    }
  };

  const validateForm = () => {
    if (newUser.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return false;
    }
    if (newUser.name.length < 3) {
      setError("El nombre de usuario debe tener al menos 3 caracteres");
      return false;
    }
    if (!newUser.email.includes("@" && ".")) {
      setError("El correo electrónico no es válido");
      return false;
    }
    if (newUser.phone.length != 9) {
      setError("El teléfono no es válido");
      return false;
    }
    if (newUser.address.length < 5) {
      setError("La dirección no es válida");
      return false;
    }
    if (newUser.cp.length != 5) {
      setError("El código postal no es válido");
      return false;
    }
    if (newUser.province.length < 3) {
      setError("La provincia no es válida");
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.container}>
          <h2 className={styles.title}>Regístrate</h2>
          <form className={styles.formBody} onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.form}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre de usuario"
                  className={styles.field}
                  value={newUser.name}
                  onChange={handleInputChange}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  className={styles.field}
                  value={newUser.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="locality"
                  placeholder="Localidad"
                  className={styles.field}
                  value={newUser.locality}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  name="cp"
                  placeholder="Código postal"
                  className={styles.field}
                  value={newUser.cp}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.form}>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className={styles.field}
                  value={newUser.email}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Dirección (Calle, número, piso, puerta)"
                  className={styles.field}
                  value={newUser.address}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="province"
                  placeholder="Provincia"
                  className={styles.field}
                  value={newUser.province}
                  onChange={handleInputChange}
                />
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Contraseña"
                    className={styles.field}
                    value={newUser.password}
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
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.submitButton}>
              Regístrate
            </button>
          </form>
          <div className={styles.signUp}>
            <p>¿Ya tienes una cuenta?</p>
            <Link className={styles.link} href="/login-usuario">
              Accede aquí
            </Link>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
