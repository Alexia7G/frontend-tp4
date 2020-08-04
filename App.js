import React, { useState, useEffect } from "react";
import {} from "./app/utils/firebase";
import * as firebase from "firebase";
import Navegacion from "./app/navigations/Navegacion";
import Login from "./app/screens/Cuenta/Login";
import Cargando from "./app/componentes/Cargando";

export default function App() {
  return <Navegacion />;
  /* const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Cargando visible={true} text="Cargando..." />;

   return login ? <Navegacion /> : <Login />; */
}
