import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import LoadingIndicator from "../components/LoadingIndicator";
import { GET_NOTE } from "../API/Query";
import ErrorQuery from "../components/ErrorQuery";
import RefreshButton from "../components/RefreshButton";
import { Feather } from "@expo/vector-icons";
import { format } from "date-fns";
import { SECONDARY_DARK } from "../styles/constants";
import { AntDesign } from "@expo/vector-icons";
import style from "../styles/style";

const NoteScreen = ({ route, navigation }) => {
  const { id, anons } = route.params;

  const { loading, error, data, refetch, networkStatus } = useQuery(GET_NOTE, {
    variables: { id },
    fetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    navigation.setOptions({
      title: anons,
      headerRight: () => <RefreshButton action={refetch} />,
    });
  }, []);

  if (loading) return <LoadingIndicator />;

  if (networkStatus === networkStatus.refetch) return <LoadingIndicator />;
  if (error) return <ErrorQuery error={error} />;
  return (
    <ScrollView style={{ padding: 30 }} endFillColor={2}>
      <Text style={style.noteScreenTitle}>{data.note.anons}</Text>
      <Text style={{ fontSize: 16, marginVertical: 30 }}>
        {data.note.content}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 70,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Feather name="user" size={24} color={SECONDARY_DARK} />
          <Text style={{ color: SECONDARY_DARK }}>
            {" "}
            {data.note.author.username}
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: SECONDARY_DARK }}>
            Last update:{" "}
            {format(new Date(data.note.updatedAt), "HH:mm, dd.MM.yyyy ")}
          </Text>
          <Text style={{ color: SECONDARY_DARK }}>
            Created at:{" "}
            {format(new Date(data.note.createdAt), "HH:mm, dd.MM.yyyy ")}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NoteScreen;

/* <AntDesign name="hearto" size={24} color={SECONDARY_DARK} />*/
