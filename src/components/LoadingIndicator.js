import React from "react";
import { View, ActivityIndicator } from "react-native";

const LoadingIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default LoadingIndicator;
