import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopRestaurants from "../screens/TopRestaurants";
import Search from "../screens/Search";

import Restaurants from "../screens/Restaurants";
import Favorites from "../screens/Favorites";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={Restaurants}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          Favoritos
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurants}
          options={{ title: "Top 5" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
