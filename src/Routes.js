import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Services from "./pages/Services";
import Cart from "./pages/Cart";

import { colors } from "./styles";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70 },
          tabBarIconStyle: { display: "none" },
          tabBarActiveTintColor: colors.purple,
          tabBarInactiveTintColor: colors.light,
          tabBarActiveBackgroundColor: colors.purple,
          tabBarInactiveBackgroundColor: colors.orange,
          tabBarLabelStyle: {
            width: "100%",
            flex: 1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: colors.orange,
          },
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}
      >
        <Tab.Screen name="Serviços" component={Services} />
        <Tab.Screen name="Carrinho" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
