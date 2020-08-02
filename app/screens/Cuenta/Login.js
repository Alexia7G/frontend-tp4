import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";

export default function Login() {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo-prueba.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <Text>Login from</Text>
        <CrearUsuario />
      </View>
      <Divider style={styles.divider} />
    </ScrollView>
  );
}

const CrearUsuario = () => {
  return (
    <Text style={styles.textCrear}>
      ¿Todavía no tienes una cuenta?{" "}
      <Text style={styles.btnCrear} onPress={() => console.log("registro..")}>
        Regístrate
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textCrear: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnCrear: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
