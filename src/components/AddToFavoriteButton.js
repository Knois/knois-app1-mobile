import { TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { SET_FAVORITE } from "../API/Mutation";
import style from "../styles/style";
import { SECONDARY_DARK } from "../styles/constants";

const AddToFavoriteButton = ({ id }) => {
  const [setFavorite, { data, error }] = useMutation(SET_FAVORITE, {
    onCompleted: (data) => {
      console.log(data);
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
      <AntDesign name="hearto" size={40} color={SECONDARY_DARK} />
    </TouchableOpacity>
  );
};

export default AddToFavoriteButton;
