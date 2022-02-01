import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import style from "../styles/style";
import { SECONDARY_DARK } from "../styles/constants";

const UpdateNoteButton = ({ navigation, id, content, anons }) => {
  return (
    <TouchableOpacity
      style={style.noteToolsItem}
      onPress={() => {
        navigation.navigate("UpdateNoteScreen", {
          id: id,
          anons: anons,
          content: content,
        });
      }}
    >
      <AntDesign name="edit" size={40} color={SECONDARY_DARK} />
    </TouchableOpacity>
  );
};

export default UpdateNoteButton;
