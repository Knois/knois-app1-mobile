import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react/cjs/react.development";
import { ADD_NOTE } from "../API/Mutation";
import LoadingIndicator from "../components/LoadingIndicator";

const AddNoteScreen = ({ navigation }) => {
  const [anons, changeAnons] = useState("");
  const [content, changeContent] = useState("");
  const [anonsWarning, setAnonsWarning] = useState("");
  const [contentWarning, setContentWarning] = useState("");

  const [newNote, { data, loading, error }] = useMutation(ADD_NOTE, {
    variables: {
      anons: anons,
      content: content,
    },
  });

  useEffect(() => {
    setAnonsWarning("");
    setContentWarning("");
  }, [anons, content]);

  const checkInputs = () => {
    anons ? {} : setAnonsWarning("Введите заголовок");
    content ? {} : setContentWarning("Введите заголовок");
  };
  const action = () => {
    checkInputs();
    newNote();
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (data) {
    return (
      <>
        <Text>Completed!</Text>
      </>
    );
  }
  return (
    <View style={{ padding: 30 }}>
      <Text>Введите заголовок:</Text>
      <TextInput
        onChangeText={changeAnons}
        value={anons}
        style={{ padding: 10, borderWidth: 1, borderColor: "red" }}
        placeholder={anonsWarning}
        placeholderTextColor="red"
      />
      <Text>Введите основной текст:</Text>
      <TextInput
        onChangeText={changeContent}
        value={content}
        style={{ padding: 10, borderWidth: 1, borderColor: "red" }}
        placeholder={contentWarning}
        placeholderTextColor="red"
      />
      <Button title="Add" onPress={action} />

      {error ? <Text>Ошибка!</Text> : <></>}
    </View>
  );
};

export default AddNoteScreen;
