import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Icon, Image } from "react-native-elements";
import ListaRestaurantes from "../../componentes/Restaurantes/ListaRestauranes";

export default function Inicio() {
  return (
    <View>
      <View style={styles.viewFondo}>
        <ImageBackground
          source={require("../../../assets/img/fondo.png")}
          resizeMode="cover"
          style={styles.logo}
        />

        <View style={styles.viewContenido}>
          <ListaRestaurantes />
        </View>
      </View>
    </View>

    /* <View style={styles.viewBody}>
      <ListaRestaurantes />
      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#7F42A4"
        containerStyle={styles.btnContainer}
      />
    </View> */
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginTop: 20,
    marginBottom: 5,
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    right: 10,
    /* shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5, */
  },
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

/* import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Cards from "../Cards";
import { Card } from "react-native-material-ui";
import CardRestaurante from "../../componentes/CardRestaurante";

export default function Inicio() {
  return (
    <View>
      <View>
        <ImageBackground
          source={require("../../../assets/img/fondo.png")}
          resizeMode="cover"
          style={styles.logo}
        />
      </View>
      <View style={styles.view2}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <CardRestaurante />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  view2: {
    display: "flex",
    marginTop: -5,
    marginLeft: "2%",
    marginRight: "1%",
    backgroundColor: "red",
  },
  logo: {
    width: "100%",
    height: 250,
    marginTop: 0,
    backgroundColor: "black",
  },
  container: {
    width: "100%",
    height: "67%",
    marginTop: -10,
    backgroundColor: "green",
    padding: 10,
    marginBottom: 100,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
}); */
