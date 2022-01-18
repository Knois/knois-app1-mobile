import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { format } from "date-fns";

const NoteFeedItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: 200,
          width: "80%",
          alignSelf: "center",
          marginVertical: 10,
          borderRadius: 20,
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        <Text style={{ flex: 3, padding: 10 }}>{item.content}</Text>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
          }}
        >
          <EvilIcons
            name="clock"
            size={24}
            color="black"
            style={{ paddingHorizontal: 10 }}
          />

          <View>
            <Text style={{ fontSize: 8 }}>Last update: </Text>

            <Text style={{ fontSize: 8 }}>
              {format(new Date(item.updatedAt), "MMM do yyyy")}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
          }}
        >
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={{ paddingHorizontal: 10 }}>{item.favoriteCount}</Text>
        </View>
      </TouchableOpacity>
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
