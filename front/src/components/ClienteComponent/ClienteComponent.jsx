import React, { useState, useEffect } from "react";
import styles from "./ClienteComponent.module.css";
import { getUserById, updateUser } from "../../../api/userFetch";
import { useRouter } from "next/router";

export default function ClienteComponent() {
  const router = useRouter();
  let userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(userLocalStorage);
  const [id, setId] = useState();
  const [editingUser, setEditingUser] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState();
  const [direccion, setDireccion] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
    userLocalStorage = JSON.parse(localStorage.getItem("user"));
    const loadUserData = async () => {
      const userAux = await getUserById(userLocalStorage.data.user._id);
      setNombre(userAux.userData.userName);
      setTelefono(userAux.userData.userPhone);
      setDireccion(userAux.userData.userAddress);
    };
    loadUserData();
    setUserData(userLocalStorage);
    setId(userLocalStorage.data.user._id);
  }, []);

  const handlerEditUser = () => {
    setEditingUser(!editingUser);
    setEditing(!editing);
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
        setUserData(userUpdated);
        setId(userData.data.user._id);
        setEditingUser(false);
        alert("Los datos del cliente han sido modificados");
        router.back();
      } else {
        setEditingUser(false);
        alert(
          "No ha realizado ninguna modificación, debe introducir algún cambio"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Bienvenido a tu perfil</h1>
        <div className={styles.datosEditContainer}>
          <h2 className={styles.subtitleDatos}>Mis datos personales</h2>
          <button className={styles.buttonEdit} onClick={handlerEditUser}>
            {editing ? "Cancelar edición" : "Editar"}
          </button>
        </div>
        {userData.status == "Success" && !editingUser && (
          <>
            <p className={styles.data}>
              <span>Nombre: </span>
              {nombre}
            </p>
            <p className={styles.data}>
              <span>Teléfono:</span>
              {telefono}
            </p>
            <p className={styles.data}>
              <span>Dirección:</span> {direccion}
            </p>
          </>
        )}

        {userData.status == "Success" && editingUser && (
          <div className={styles.editContainer}>
            <div className={styles.dataEdit}>
              <p className={styles.data}>
                <span>Nombre: </span>
              </p>
              <input
                className={styles.inputEdit}
                type="text"
                placeholder={nombre}
                value={nombre}
                onChange={handlerOnChangeNombre}
              />
            </div>
            <div className={styles.dataEdit}>
              <p className={styles.data}>
                <span>Teléfono:</span>
              </p>
              <input
                className={styles.inputEdit}
                type="number"
                placeholder={telefono}
                value={telefono}
                onChange={handlerOnChangeTelefono}
              />
            </div>
            <div className={styles.dataEdit}>
              <p className={styles.data}>
                <span>Dirección:</span>
              </p>
              <input
                className={styles.inputEdit}
                type="text"
                placeholder={direccion}
                value={direccion}
                onChange={handlerOnChangeDireccion}
              />
            </div>
            <div>
              <button className={styles.buttonEdit} onClick={saveUser}>
                Guardar los cambios
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
