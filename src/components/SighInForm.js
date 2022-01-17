import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";

const SighInForm = ({ action, navigation, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    action({
      variables: {
        email: email,
        password: password,
        username: username,
      },
    });
  };

  return (
    <View style={{ padding: 20 }}>
      {formType == "signUp" && (
        <>
          <Text style={{ padding: 10, alignSelf: "center" }}>Username:</Text>
          <TextInput
            onChangeText={(text) => setUsername(text)}
            valuse={username}
            textContentType="username"
            autoComplete="username"
            autoCapitalize="none"
            style={{ borderWidth: 0.2, padding: 10, marginBottom: 20 }}
          />
        </>
      )}
      <Text style={{ padding: 10, alignSelf: "center" }}>Email:</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        valuse={email}
        autoFocus={true}
        textContentType="emailAddress"
        autoComplete="email"
        autoCapitalize="none"
        style={{ borderWidth: 0.2, padding: 10, marginBottom: 20 }}
      />
      <Text style={{ padding: 10, alignSelf: "center" }}>Password:</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        style={{ borderWidth: 0.2, padding: 10, marginBottom: 20 }}
      />
      {formType !== "signUp" ? (
        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 1,
              routes: [{ name: "Registration" }],
            })
          }
        >
          <Text>Need an account? Register</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 1,
              routes: [{ name: "SignIn" }],
            })
          }
        >
          <Text>Have an account? Sign in</Text>
        </TouchableOpacity>
      )}
      <Button title="Ok" onPress={handleSubmit} />
    </View>
  );
};

export default SighInForm;
