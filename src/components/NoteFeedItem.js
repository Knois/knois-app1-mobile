import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NoteFeedItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity></TouchableOpacity>
    </>
  );
};

export default NoteFeedItem;

/*<TouchableOpacity
style={{
  width: 50,
  height: 50,
  backgroundColor: "#F0D0D0",
  margin: 5,
  alignSelf: "center",
}}
onPress={() =>
  navigation.navigate("NoteScreen", {
    id: item.id,
  })
}
/>*/
