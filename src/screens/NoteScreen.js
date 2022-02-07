import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import LoadingIndicator from "../components/LoadingIndicator";
import { GET_NOTE } from "../API/Query";
import RefreshButton from "../components/RefreshButton";
import { Feather } from "@expo/vector-icons";
import { format } from "date-fns";
import { SECONDARY_DARK } from "../styles/constants";
import style from "../styles/style";
import DeleteButton from "../components/DeleteButton";
import AddToFavoriteButton from "../components/AddToFavoriteButton";
import UpdateNoteButton from "../components/UpdateNoteButton";

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

  if (error)
    return (
      <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            textAlign: "center",
            color: SECONDARY_DARK,
          }}
        >
          Error! Note is deleted or doesn't exist!
        </Text>
      </View>
    );

  if (isDeleted)
    return (
      <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            textAlign: "center",
            color: SECONDARY_DARK,
          }}
        >
          Deleted!
        </Text>
      </View>
    );

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
        <UpdateNoteButton
          id={data.note.id}
          anons={data.note.anons}
          content={data.note.content}
          navigation={navigation}
        />
        <AddToFavoriteButton id={id} refetch={refetch} />
        <DeleteButton id={id} setDeleted={setDeleted} />
      </View>
    </ScrollView>
  );
};

export default NoteScreen;
