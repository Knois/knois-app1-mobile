import React from "react";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { WHITE } from "../styles/constants";
import { useNavigation } from "@react-navigation/native";

const AddNoteButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ alignSelf: "center", justifyContent: "center" }}
      onPress={() => {
        navigation.navigate("AddNoteScreen");
      }}
    >
      <EvilIcons name="plus" size={45} color={WHITE} />
    </TouchableOpacity>
  );
};

export default AddNoteButton;
