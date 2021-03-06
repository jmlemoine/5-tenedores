import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Acount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
      /*if (!user) {
        setLogin(false);
      } else {
        setLogin(true );
      }*/
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando..." />; //<Text style={styles.container}>Cargando...</Text>;

  return login ? <UserLogged /> : <UserGuest />;

  /*return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
