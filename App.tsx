import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import BottomTabNavigator from "./src/navigations/BottomTabNavigator";
import { CartProvider } from "./src/context/cart-context";
export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <BottomTabNavigator />
      </CartProvider>
    </NavigationContainer>
  );
}
