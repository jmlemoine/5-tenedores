import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        style={styles.image}
        source={require("../../../assets/img/original.jpg")}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu perfil</Text>
      <Text style={styles.container}>
        Cómo podrías evaluar el mejor restarante? Busca los mejores restaurantes
        de una forma sencilla, vota cuál te ha gustado más y comenta tu
        experiencia
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ver tu perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
    /*<View style={styles.container}>
      <Text>UserGuest</Text>
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
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "70%",
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
});
