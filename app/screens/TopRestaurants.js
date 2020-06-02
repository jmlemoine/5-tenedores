import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TopRestaurants() {
  return (
    <View style={styles.container}>
      <Text>Top 5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*
yarn add @react-navigation/native@~5.1.5

expo install react-native-gesture-handler@~1.6.0 
expo install react-native-reanimated@~1.7.0 
expo install react-native-screens@~2.2.0 
expo install react-native-safe-area-context@~0.7.3 
expo install @react-native-community/masked-view@~0.1.6

yarn add @react-navigation/stack@~5.2.10
yarn add @react-navigation/bottom-tabs@~5.2.6

*/
