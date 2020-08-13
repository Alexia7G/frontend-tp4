import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import Logueado from "./Logueado";
import Cargando from "../../componentes/Cargando";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Cuenta() {
  return (
    <View>
      <View style={styles.viewFondo}>
        <ImageBackground
          source={require("../../../assets/img/fondo.png")}
          resizeMode="cover"
          style={styles.logo}
        />

        <View style={styles.viewContenido}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFondo: {
    marginTop: 25,
    width: "100%",
    height: "100%",
    marginBottom: 0,
  },
  viewContenido: {
    width: "100%",
    height: "80%",
    marginTop: "-50%",
  },
  logo: {
    width: "100%",
    height: "65%",
  },
});
/* const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Cargando visible={true} text="Cargando..." />;

  return login ? <Logueado /> : <UserGuest />;*/
