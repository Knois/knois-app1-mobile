import { View, Text } from "react-native";
import React from "react";
import { SECONDARY_DARK } from "../styles/constants";

const SystemMessage = ({ children }) => {
  return (
    <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: SECONDARY_DARK,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default SystemMessage;
