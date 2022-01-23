import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const FooterBottomTabsItem = ({ children, navigation, stack }) => {
  const action = () => {
    navigation.navigate(stack);
  };

  return (
    <TouchableOpacity
      onPress={action}
      style={{
        width: "20%",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default FooterBottomTabsItem;
