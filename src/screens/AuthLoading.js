import React, { useContext, useEffect } from "react";
import { Button } from "react-native";
import * as SecureStore from "expo-secure-store";

import { AuthContext } from "../AuthContext";
import LoadingIndicator from "../components/LoadingIndicator";

const AuthLoading = ({ navigation }) => {
  const { setAuth } = useContext(AuthContext);

  const signIn = () => {
    setAuth(true);
  };

  const checkLoginState = async () => {
    const userToken = await SecureStore.getItemAsync("token");
    console.log("Token in SecureStore is:");
    console.log(userToken);
    userToken ? setAuth(true) : navigation.navigate("SignIn");
  };

  useEffect(() => {
    checkLoginState();
  });

  return (
    <>
      <LoadingIndicator />
      <Button
        title="set context TRUE"
        style={{ backgroundColor: "red", width: 100, height: 100, margin: 10 }}
        onPress={signIn}
      />
      <Button
        title="check token from SecureStore"
        style={{ backgroundColor: "red", width: 100, height: 100, margin: 10 }}
        onPress={checkLoginState}
      />
    </>
  );
};

export default AuthLoading;
