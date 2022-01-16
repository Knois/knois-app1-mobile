import React, { useContext } from "react";
import { View, Button } from "react-native";
import * as SecureStore from "expo-secure-store";

import { AuthContext } from "../AuthContext";

const Settings = () => {
  const { setAuth } = useContext(AuthContext);

  const deleteToken = async () => {
    await SecureStore.deleteItemAsync("token");
  };

  const signOut = () => {
    deleteToken().then(setAuth(false));
  };

  return (
    <View>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default Settings;
