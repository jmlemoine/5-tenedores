import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import InfoUser from "../../components/Account/InfoUser";

export default function UserLogged() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const toastRef = useRef();

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {userInfo && <InfoUser userInfo={userInfo} toastRef={toastRef} />}

      <Text>Account Options</Text>
      <Button
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnLogout}
        title="Cerrar Sesión"
        titleStyle={styles.btnLogoutText}
        onPress={() => firebase.auth().signOut()}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading text={loadingText} isVisible={loading} />
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
  btnLogout: {
    backgroundColor: "#fff",
    marginTop: 30,
    borderRadius: 0,
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  btnLogoutText: {
    color: "#00a680",
  },
});
