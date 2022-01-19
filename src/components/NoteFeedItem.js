import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "../styles/style";
import UpdatedAt from "./UpdatedAt";
import FavoritesCount from "./FavoritesCount";

const NoteFeedItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={style.noteFeedItemContainer}
        onPress={() =>
          navigation.navigate("NoteScreen", {
            id: item.id,
          })
        }
      >
        <Text style={{ flex: 3, padding: 10 }}>{item.anons}</Text>
        <UpdatedAt updatedAt={item.updatedAt} />
        <FavoritesCount favoriteCount={item.favoriteCount} />
      </TouchableOpacity>
    </>
  );
};

export default NoteFeedItem;
