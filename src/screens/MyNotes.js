import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "../styles/style";
import { useNavigation } from "@react-navigation/native";

const MyNotes = () => {
  const navigation = useNavigation();

  const goToNote = () => {
    navigation.navigate("NoteScreen");
  };

  return (
    <View style={style.container}>
      <Text>MyNotes</Text>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#F0D0D0",
        }}
        onPress={() => navigation.navigate("NoteScreen")}
      />
    </View>
  );
};

export default MyNotes;
