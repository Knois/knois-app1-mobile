import React, { useContext } from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

import { AuthContext } from "../AuthContext";

const token = SecureStore.deleteItemAsync("token");

const deleteToken = async () => {
  await SecureStore.deleteItemAsync("token");
};
const Settings = () => {
  const { setAuth } = useContext(AuthContext);
  const navigation = useNavigation();

  const signOut = () => {
    setAuth(false);
  };

  return (
    <View>
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Delete Token" onPress={deleteToken} />
    </View>
  );
};

export default Settings;
