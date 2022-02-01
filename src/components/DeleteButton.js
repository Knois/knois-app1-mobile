import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { DELETE_NOTE } from "../API/Mutation";
import style from "../styles/style";
import { SECONDARY_DARK, WHITE } from "../styles/constants";
import LoadingIndicator from "../components/LoadingIndicator";

const DeleteButton = ({ id, setDeleted }) => {
  const [deleteNote, { loading, data, error }] = useMutation(DELETE_NOTE, {
    onCompleted: (data) => {
      setDeleted(true);
    },
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
      {loading ? (
        <LoadingIndicator color={WHITE} />
      ) : (
        <AntDesign name="delete" size={40} color={SECONDARY_DARK} />
      )}
    </TouchableOpacity>
  );
};

export default DeleteButton;
