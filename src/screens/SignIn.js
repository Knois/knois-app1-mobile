import React from "react";
import { View, Button } from "react-native";
import * as SecureStore from "expo-secure-store";

const SignIn = ({ navigation }) => {
  const setToken = () => {
    SecureStore.setItemAsync("token", "123123");
  };

  const checkLoginState = async () => {
    const userToken = await SecureStore.getItemAsync("token");
    console.log("Token in SecureStore is:");
    console.log(userToken);
  };

  return (
    <View>
      <Button title="set token" onPress={setToken} />
      <Button
        title="check token from SecureStore"
        style={{ backgroundColor: "red", width: 100, height: 100, margin: 10 }}
        onPress={checkLoginState}
      />
    </View>
  );
};

export default SignIn;
