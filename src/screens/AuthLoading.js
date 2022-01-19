import React, { useContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

import { AuthContext } from "../AuthContext";
import LoadingIndicator from "../components/LoadingIndicator";

const AuthLoading = ({ navigation }) => {
  const { setAuth } = useContext(AuthContext);

  const checkLoginState = async () => {
    const userToken = await SecureStore.getItemAsync("token");
    userToken
      ? setAuth(true)
      : navigation.reset({
          index: 1,
          routes: [{ name: "SignIn" }],
        });
  };

  useEffect(() => {
    checkLoginState();
  }, []);

  return (
    <>
      <LoadingIndicator />
    </>
  );
};

export default AuthLoading;
