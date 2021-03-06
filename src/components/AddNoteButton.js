import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SECONDARY_DARK } from "../styles/constants";
import style from "../styles/style";

const AddNoteButton = ({ action, loading }) => {
  return (
    <TouchableOpacity
      style={style.addNoteButton}
      onPress={() => {
        action();
      }}
    >
      <AntDesign name="plus" size={40} color={SECONDARY_DARK} />
      <Text
        style={{
          textAlign: "center",
          color: SECONDARY_DARK,
          fontWeight: "bold",
        }}
      >
        Добавить
      </Text>
    </TouchableOpacity>
  );
};

export default AddNoteButton;
