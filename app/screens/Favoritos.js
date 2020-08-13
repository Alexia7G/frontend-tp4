import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Favoritos() {
  return (
    <View>
      <View style={styles.viewFondo}>
        <ImageBackground
          source={require("../../assets/img/fondo.png")}
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
