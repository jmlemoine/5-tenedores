import React from "react";
import { StyleSheet, Text, View, YellowBox } from "react-native";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/Firebase";
import { decode, encode } from "base-64";

YellowBox.ignoreWarnings(["Setting a Timer"]);

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

export default function App() {
  return <Navigation />;
}
