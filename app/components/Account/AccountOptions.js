import React from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";
import { map } from "lodash";

export default function AccountOptions(props) {
  const { userInfo, toastRef } = props;
  const menuOptions = generateOptions();
  console.log(menuOptions);
  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} title={menu.title} />
      ))}
    </View>
  );
}

function generateOptions() {
  return [
    {
      title: "Cambiar Nombre y Apellidos",
    },
    {
      title: "Cambiar Correo Electrónico",
    },
    {
      title: "Cambiar Contraseña",
    },
  ];
}

const styles = StyleSheet.create({});
