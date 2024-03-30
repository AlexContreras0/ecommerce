import React, { useState, useEffect } from "react";
import styles from "./ClienteComponent.module.css";
import { updateUser } from "../../../api/userFetch";
import { useRouter } from "next/router";

export default function ClienteComponent() {
  const router = useRouter();
  let userLocalStorage = JSON.parse(localStorage.getItem('user'))
  const [userData, setUserData] = useState(userLocalStorage);
  const [id, setId] = useState();
  const [editingUser, setEditingUser] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState();
  const [direccion, setDireccion] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
    userLocalStorage = JSON.parse(localStorage.getItem('user'))
    setUserData(userLocalStorage)
    setId(userData.data.user._id)
  }, []);


const handlerEditUser = () => {
    setEditingUser(!editingUser);
  };

  const handlerOnChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handlerOnChangeTelefono = (e) => {
    setTelefono(e.target.value);
  };

  const handlerOnChangeDireccion = (e) => {
    setDireccion(e.target.value);
  };

  const saveUser = async () => {
    try {  
    const userUpdated = await updateUser(
      id,
      JSON.stringify({
        userName: nombre,
        userPhone: telefono,
        userAddress: direccion,
      })
    );
    if (userUpdated.status == "succeeded") {
      setUserData(userUpdated)
      setId(userData.data.user._id);
      setEditingUser(false)
      alert("Los datos del cliente han sido modificados");
      router.back();
    } else {
      setEditingUser(false)
      alert(
        "No ha realizado ninguna modificación, debe introducir algún cambio"
      );
    }
  } catch (error) {
      console.log(error)
  }
  };

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Bienvenido a tu perfil</h1>
              <h2 className={styles.subtitleDatos}>Mis datos personales</h2>
              {(userData.status == "Success") && (!editingUser) && (
                <>
                  <p className={styles.name}>
                    <span>Nombre: </span>
                    {userData.data.user.userName}
                  </p>
                  <p className={styles.phone}>
                    <span>Teléfono:</span>
                    {userData.data.user.userPhone}
                  </p>
                  <p className={styles.address}>
                    <span>Dirección:</span> {userData.data.user.userAddress}
                  </p>
                </>
              )}
              <button className={styles.buttonEdit} onClick={handlerEditUser}>
                Editar datos personales
              </button>
              {(userData.status == "Success") && (editingUser) && (
                <>
                  <p className={styles.name}>
                    <span>Nombre: </span>
                  </p>
                    <input type="text" placeholder={userData.data.user.userName} value={nombre} onChange={handlerOnChangeNombre}/>
                  <p className={styles.phone}>
                    <span>Teléfono:</span>
                    
                  </p>
                  <input type="number" placeholder={userData.data.user.userPhone} value={telefono} onChange={handlerOnChangeTelefono}/>
                  <p className={styles.address}>
                    <span>Dirección:</span> {userData.data.user.userAddress}
                  </p>
                  <input type="text" placeholder={userData.data.user.userAddress} value={direccion} onChange={handlerOnChangeDireccion}/>
                  <button onClick={saveUser}>Guardar los cambios</button>
                </>
              )}
            </div>
            <div>
              {/* FALTA LÓGICA PARA MOSTRAR LOS PEDIDOS */}
              <p className={styles.orders}>Mis pedidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
