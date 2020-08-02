import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import Logueado from "./Logueado";
import Cargando from "../../componentes/Cargando";

export default function Cuenta() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Cargando visible={true} text="Cargando..." />;

  return login ? <Logueado /> : <UserGuest />;
}
