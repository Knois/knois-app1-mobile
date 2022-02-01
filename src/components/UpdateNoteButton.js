import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { UPDATE_NOTE } from "../API/Mutation";
import style from "../styles/style";
import { SECONDARY_DARK } from "../styles/constants";

const UpdateNoteButton = ({ id }) => {
  const [updateNote, { data, error }] = useMutation(UPDATE_NOTE, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <TouchableOpacity
      style={style.noteToolsItem}
      onPress={() => {
        updateNote({
          variables: {
            id: id,
          },
        });
      }}
    >
      <AntDesign name="edit" size={40} color={SECONDARY_DARK} />
    </TouchableOpacity>
  );
};

export default UpdateNoteButton;
