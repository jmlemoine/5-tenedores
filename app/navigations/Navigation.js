import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Restaurants from "../screens/Restaurants";
import Favorites from "../screens/Favorites";
import TopRestaurants from "../screens/TopRestaurants";
import Search from "../screens/Search";
import Account from "../screens/Account";
import RestaurantsStack from "../navigations/RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchsStack from "./SearchsStack";
import AccountsStack from "./AccountsStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          Favoritos
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="search"
          component={SearchsStack}
          options={{ title: "Search" }}
        />
        <Tab.Screen
          name="account"
          component={AccountsStack}
          options={{ title: "Account" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
