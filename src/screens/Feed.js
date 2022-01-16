import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import LoadingIndicator from "../components/LoadingIndicator";

const GET_NOTES = gql`
  query notes {
    notes {
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

const Feed = () => {
  const navigation = useNavigation();
  // Если данные загружаются, наше приложение будет показывать индикатор загрузки
  // Если при получении данных произошел сбой, отображаем сообщение об ошибке
  // Если запрос выполнен успешно и содержит заметки, возвращаем их в ленту
  const { loading, error, data } = useQuery(GET_NOTES);
  if (loading) return <LoadingIndicator />;
  if (error)
    return (
      <>
        <Text style={{ padding: 30, alignSelf: "center" }}>
          Error loading notes:
        </Text>
        <Text style={{ padding: 30, alignSelf: "center" }}>
          {error.networkError.name}
          {error.message}
        </Text>
      </>
    );

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data.notes}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <>
              <Text style={{ padding: 30 }}>{item.content}</Text>
              <TouchableOpacity
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
              />
            </>
          )}
        />
      </View>
    </>
  );
};

export default Feed;
