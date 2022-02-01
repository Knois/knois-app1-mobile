import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { SET_FAVORITE } from "../API/Mutation";
import style from "../styles/style";
import { SECONDARY_DARK, WHITE } from "../styles/constants";
import LoadingIndicator from "./LoadingIndicator";

const AddToFavoriteButton = ({ id, refetch }) => {
  const [setFavorite, { loading, data, error }] = useMutation(SET_FAVORITE, {
    onCompleted: (data) => {
      refetch();
    },
  });

  return (
    <TouchableOpacity
      style={style.noteToolsItem}
      onPress={() => {
        setFavorite({
          variables: {
            id: id,
          },
        });
      }}
    >
      {loading ? (
        <LoadingIndicator color={WHITE} />
      ) : (
        <AntDesign name="hearto" size={40} color={SECONDARY_DARK} />
      )}
    </TouchableOpacity>
  );
};

export default AddToFavoriteButton;
