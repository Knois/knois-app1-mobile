import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useMutation } from "@apollo/client";

import SighInForm from "../components/SighInForm";
import LoadingIndicator from "../components/LoadingIndicator";
import { AuthContext } from "../AuthContext";
import { SIGNIN_USER } from "../API/Mutation";

const SignIn = ({ navigation }) => {
  const { setAuth } = useContext(AuthContext);

  const saveTokenToStore = (token) => {
    SecureStore.setItemAsync("token", token).then(setAuth(true));
  };

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      saveTokenToStore(data.signIn);
    },
  });

  if (loading) return <LoadingIndicator />;

  if (error)
    return (
      <>
        <Text style={{ padding: 30, alignSelf: "center" }}>Error sign in!</Text>
        <SighInForm action={signIn} formType="signIn" navigation={navigation} />
      </>
    );

  return (
    <View>
      <SighInForm action={signIn} formType="signIn" navigation={navigation} />
    </View>
  );
};

export default SignIn;
