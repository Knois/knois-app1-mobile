import React from "react";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { WHITE } from "../styles/constants";

const RefreshButton = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
        }}
      >
        <EvilIcons name="refresh" size={40} color={WHITE} />
      </TouchableOpacity>
    </>
  );
};

export default RefreshButton;
