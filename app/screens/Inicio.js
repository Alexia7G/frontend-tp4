import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Cards from "./Cards";

export default function Inicio() {
  return (
    <View>
      <View>
        <ImageBackground
          source={require("../../assets/img/fondo.png")}
          resizeMode="cover"
          style={styles.logo}
        />
      </View>
      <View style={styles.view2}>
        <Cards />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  view2: {
    width: "50%",
  },
  logo: {
    width: "100%",
    height: "70%",
    marginTop: 0,
  },
});
