import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "../styles/style";
import { useNavigation } from "@react-navigation/native";

const MyNotes = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text>MyNotes</Text>
    </View>
  );
};

export default MyNotes;
