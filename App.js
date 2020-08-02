import React, { useEffect } from "react";
import Navegacion from "./app/navigations/Navegacion";
import {} from "./app/utils/firebase";
import * as firebase from "firebase";

export default function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);
  return <Navegacion />;
}
