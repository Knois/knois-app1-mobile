import React from "react";
import { View, Text } from "react-native";
import style from "../styles/style";
import { AntDesign } from "@expo/vector-icons";

const FavoritesCount = ({favoriteCount}) => {
  return (
    <View style={style.favoritesCountContainer}>
      <AntDesign name="hearto" size={24} color="black" />
      <Text style={{ paddingHorizontal: 10 }}>{favoriteCount}</Text>
    </View>
  );
};

export default FavoritesCount;
