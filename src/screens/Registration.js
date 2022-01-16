import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../AuthContext";

const Registration = ({ navigation }) => {
  const { setAuth } = useContext(AuthContext);

  const signIn = () => {
    setAuth(true);
  };
  return (
    <View>
      <Text>regawwwwwwwwwwwwwwwwwwwwwwwwdsssssssss</Text>
      <Text>regawwwwwwwwwwwwwwwwwwwwwwwwdsssssssss</Text>
      <Text>regawwwwwwwwwwwwwwwwwwwwwwwwdsssssssss</Text>
      <Button
        title="1"
        style={{ backgroundColor: "red", width: 100, height: 100 }}
        onPress={signIn}
      />
    </View>
  );
};

export default Registration;
