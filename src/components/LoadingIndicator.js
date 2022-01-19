import React from "react";
import { View, ActivityIndicator } from "react-native";
import { SECONDARY_DARK } from "../styles/constants";

const LoadingIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size="large" color={SECONDARY_DARK} />
    </View>
  );
};

export default LoadingIndicator;
