import React from "react";
import { StyleSheet, Text, View, YellowBox } from "react-native";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/Firebase";

YellowBox.ignoreWarnings(["Setting a Timer"]);

export default function App() {
  /*useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);*/

  return (
    <Navigation />
    /*<View style={styles.container}>
      <Text>Hola Koky</Text>
    </View>*/
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
