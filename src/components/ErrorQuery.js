import React from "react";
import { View, Text } from "react-native";

const ErrorQuery = ({ error }) => {
  return (
    <View>
      <Text style={{ padding: 30, alignSelf: "center" }}>
        Error loading notes:
      </Text>
      <Text style={{ padding: 30, alignSelf: "center" }}>
        {error.networkError.name}
        {error.message}
      </Text>
    </View>
  );
};

export default ErrorQuery;
