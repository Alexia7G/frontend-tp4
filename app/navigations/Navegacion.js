import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import InicioStack from "./InicioStack";
import FavoritosStack from "./FavoritosStack";
import CuentaStack from "./CuentaStack";

import Cuenta from "../screens/Cuenta/Cuenta";
import Login from "../screens/Cuenta/Login";
import Registro from "../screens/Cuenta/Registro";

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "inicio":
      iconName = "home-outline";
      break;
    case "mapa":
      iconName = "map-marker-radius";
      break;
    case "cuenta":
      iconName = "account-circle";
      break;
    case "favoritos":
      iconName = "account-circle-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={40} color={color} />
  );
};

export default function Navegacion() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="inicio"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "pink",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="inicio"
          component={InicioStack}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="mapa"
          component={Registro}
          options={{ title: "Vista Mapa" }}
        />
        <Tab.Screen
          name="cuenta"
          component={CuentaStack}
          options={{ title: "Mi cuenta" }}
        />
        <Tab.Screen
          name="favoritos"
          component={FavoritosStack}
          options={{ title: "Favoritos" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
