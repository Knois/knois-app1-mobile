import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MAIN_LIGHT, SECONDARY_DARK } from "../styles/constants";
import style from "../styles/style";

const AddNoteButton = ({ action }) => {
  return (
    <TouchableOpacity
      style={style.addNoteButton}
      onPress={() => {
        action();
      }}
    >
      <AntDesign name="plus" size={40} color={SECONDARY_DARK} />
    </TouchableOpacity>
  );
};

export default AddNoteButton;
