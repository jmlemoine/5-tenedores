import React from "react";
import {} from "react-native";
import * as firebase from "firebase";

export function reauthenticate(password) {
  const user = firebase.auth().currentUser;
  const credentials = firebase.auth.EmailAuthProvider.credential(
    user.email,
    password
  );

  return user.reauthenticateWithCredential(credentials);
}
