import { TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { DELETE_NOTE } from "../API/Mutation";
import style from "../styles/style";
import { SECONDARY_DARK } from "../styles/constants";

const DeleteButton = ({ id }) => {
  useEffect(() => {
    console.log(id);
  }, []);

  const [deleteNote, { data, error }] = useMutation(DELETE_NOTE, {
    onCompleted: (data) => {},
  });

  return (
    <TouchableOpacity
      style={style.noteToolsItem}
      onPress={() => {
        deleteNote({
          variables: {
            id: id,
          },
        });
      }}
    >
      <AntDesign name="delete" size={40} color={SECONDARY_DARK} />
    </TouchableOpacity>
  );
};

export default DeleteButton;
