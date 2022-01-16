import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "../styles/style";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text>Profile page</Text>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#F0D0D0",
          margin: 5,
          alignSelf: "center",
        }}
        onPress={() => navigation.navigate("Settings", {})}
      />
    </View>
  );
};

export default Profile;
