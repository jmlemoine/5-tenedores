import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../components/Account/LoginForm";

export default function Login() {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/original.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginForm />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>Social Login</Text>
    </ScrollView>
    /*<View>
      <Text>Login</Text>
    </View>*/
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  //  console.log(navigation);
  return (
    <Text style={styles.textRegister}>
      Aún no tiene cuenta? {""}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Sign Up
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 70,
  },
});
