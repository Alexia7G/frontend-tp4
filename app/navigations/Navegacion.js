import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import InicioStack from "./InicioStack";
import FavoritosStack from "./FavoritosStack";
import CuentaStack from "./CuentaStack";

import Cuenta from "../screens/Cuenta";

const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="inicio"
          component={InicioStack}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="mapa"
          component={Cuenta}
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
