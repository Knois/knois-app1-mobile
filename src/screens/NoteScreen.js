import React from "react";
import { View, Text } from "react-native";
import style from "../styles/style";
import { useQuery, gql } from "@apollo/client";

// Запрос note, принимающий переменную ID
const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const NoteScreen = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  if (loading) return <Text>Loading</Text>;
  // В случае сбоя выдаем пользователю сообщение об ошибке
  if (error) return <Text>Error! Note not found</Text>;
  return (
    <View style={style.container}>
      <Text>Note SCREEN</Text>
      <Text>{data.note.id}</Text>
      <Text>{data.note.content}</Text>
      <Text>{data.note.createdAt}</Text>
    </View>
  );
};

export default NoteScreen;
