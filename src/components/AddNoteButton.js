import React from "react";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { WHITE } from "../styles/constants";

const AddNoteButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => {
        navigation.navigate("AddNoteScreen");
      }}
    >
      <EvilIcons name="plus" size={35} color={WHITE} />
    </TouchableOpacity>
  );
};

export default AddNoteButton;
