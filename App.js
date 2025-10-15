import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Detail from "./components/Detail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "My Coffee Drink List",
            headerStyle: { backgroundColor: "#7B3F00" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Coffee Detail",
            headerStyle: { backgroundColor: "#7B3F00" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
