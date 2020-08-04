import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Registro from "../screens/Cuenta/Registro";
import Login from "../screens/Cuenta/Login";

const Stack = createStackNavigator();

export default function CuentaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar Sesión" }}
      />
      <Stack.Screen
        name="registro"
        component={Registro}
        options={{ title: "Registrarse" }}
      />
    </Stack.Navigator>
  );
}
