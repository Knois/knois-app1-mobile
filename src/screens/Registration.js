import React, { useContext } from "react";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useMutation } from "@apollo/client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import SighInForm from "../components/SighInForm";
import LoadingIndicator from "../components/LoadingIndicator";
import { REGISTRATION_USER } from "../API/Mutation";
import { AuthContext } from "../AuthContext";

const Registration = ({ navigation }) => {
  const { setAuth } = useContext(AuthContext);

  const saveTokenToStore = (token) => {
    SecureStore.setItemAsync("token", token).then(setAuth(true));
  };

  const [signUp, { loading, error }] = useMutation(REGISTRATION_USER, {
    onCompleted: (data) => {
      saveTokenToStore(data.signUp);
    },
  });

  if (loading) return <LoadingIndicator />;

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#ede0f7" }}>
      {error && (
        <Text style={{ padding: 30, alignSelf: "center" }}>Error sign in!</Text>
      )}
      <SighInForm action={signUp} formType="signUp" navigation={navigation} />
    </KeyboardAwareScrollView>
  );
};

export default Registration;
