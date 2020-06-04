import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
  return (
    <View style={styles.container}>
      <Text>UserLogged</Text>
      <Button
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        title="Cerrar Sesión"
        onPress={() => firebase.auth().signOut()}
      />
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
  btnContainer: {
    marginTop: 50,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
});
