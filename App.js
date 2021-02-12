import React from "react";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
