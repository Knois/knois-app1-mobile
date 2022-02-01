import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import LoadingIndicator from "../components/LoadingIndicator";
import { GET_NOTE } from "../API/Query";
import ErrorQuery from "../components/ErrorQuery";
import RefreshButton from "../components/RefreshButton";
import { Feather } from "@expo/vector-icons";
import { format } from "date-fns";
import { SECONDARY_DARK } from "../styles/constants";
import style from "../styles/style";
import { AntDesign } from "@expo/vector-icons";
import DeleteButton from "../components/DeleteButton";
import AddToFavoriteButton from "../components/AddToFavoriteButton";

const NoteScreen = ({ route, navigation }) => {
  const [isDeleted, setDeleted] = useState(false);
  const { id, anons } = route.params;

  const toTitle = (anons) => {
    return anons.substr(0, 20) + (anons.length > 20 ? "..." : "");
  };

  const { loading, error, data, refetch, networkStatus } = useQuery(GET_NOTE, {
    variables: { id },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    navigation.setOptions({
      title: toTitle(anons),
      headerRight: () => <RefreshButton action={refetch} />,
    });
  }, []);

  if (loading || networkStatus === networkStatus.refetch)
    return <LoadingIndicator />;

  if (error) return <ErrorQuery error={error} />;

  if (isDeleted)
    return <Text style={{ textAlign: "center", marginTop: 20 }}>Deleted!</Text>;

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
          alignContent: "center",
          marginBottom: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <Feather name="user" size={24} color={SECONDARY_DARK} />
          <Text style={{ color: SECONDARY_DARK }}>
            {data.note.author.username}
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: SECONDARY_DARK, fontSize: 10 }}>
            Last update:{" "}
            {format(new Date(data.note.updatedAt), "HH:mm, dd.MM.yyyy ")}
          </Text>
          <Text style={{ color: SECONDARY_DARK, fontSize: 10 }}>
            Created at:{" "}
            {format(new Date(data.note.createdAt), "HH:mm, dd.MM.yyyy ")}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 70,
        }}
      >
        <TouchableOpacity style={style.noteToolsItem}>
          <AntDesign name="edit" size={40} color={SECONDARY_DARK} />
        </TouchableOpacity>
        <AddToFavoriteButton id={id} />
        <DeleteButton id={id} setDeleted={setDeleted} />
      </View>
    </ScrollView>
  );
};

export default NoteScreen;
