import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
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
    </>
  );
};

export default Profile;
