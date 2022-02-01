import React from "react";
import { View, ActivityIndicator } from "react-native";
import { MAIN, SECONDARY_DARK } from "../styles/constants";

const LoadingIndicator = (color) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: color ? color : MAIN,
      }}
    >
      <ActivityIndicator size="large" color={SECONDARY_DARK} />
    </View>
  );
};

export default LoadingIndicator;
