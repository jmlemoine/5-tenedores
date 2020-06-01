import React from "react";
import { NavigationController } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Restaurants from "../screens/Restaurants";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationController>
      <Tab.Navigator>
        <Tab.Screen name="restaurants" component={Restaurants} />
      </Tab.Navigator>
    </NavigationController>
  );
}