import React from "react";
import { FlatList } from "react-native";
import NoteFeedItem from "./NoteFeedItem";

const NoteFeed = ({ notes }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => <NoteFeedItem item={item} />}
    />
  );
};

export default NoteFeed;