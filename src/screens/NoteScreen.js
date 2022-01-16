import React from "react";
import { View, Text } from "react-native";

import { useQuery } from "@apollo/client";
import LoadingIndicator from "../components/LoadingIndicator";
import { GET_NOTE } from "../API/Query";

const NoteScreen = ({ route }) => {
  const { id } = route.params;

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <LoadingIndicator />;
  // В случае сбоя выдаем пользователю сообщение об ошибке
  if (error) return <Text>Error! Note not found</Text>;
  return (
    <View>
      <Text>Note SCREEN</Text>
      <Text>{data.note.id}</Text>
      <Text>{data.note.content}</Text>
      <Text>{data.note.createdAt}</Text>
    </View>
  );
};

export default NoteScreen;
