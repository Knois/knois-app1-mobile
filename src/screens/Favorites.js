import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import style from "../styles/style";

const Favorites = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;
