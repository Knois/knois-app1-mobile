import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react/cjs/react.development";
import { ADD_NOTE } from "../API/Mutation";
import AddNoteButton from "../components/AddNoteButton";
import { MAIN } from "../styles/constants";
import style from "../styles/style";
import LoadingIndicator from "../components/LoadingIndicator";
import SystemMessage from "../components/SystemMessage";

const AddNoteScreen = ({ navigation }) => {
  const [anons, changeAnons] = useState("");
  const [content, changeContent] = useState("");
  const [anonsWarning, setAnonsWarning] = useState("");
  const [contentWarning, setContentWarning] = useState("");
  const [newNote, { loading, data, error }] = useMutation(ADD_NOTE, {
    variables: {
      anons: anons,
      content: content,
    },
  });

  useEffect(() => {
    setAnonsWarning("");
  }, [anons]);
  useEffect(() => {
    setContentWarning("");
  }, [content]);

  const checkInputs = () => {
    anons ? {} : setAnonsWarning("Введите заголовок");
    content ? {} : setContentWarning("Введите заголовок");
  };
  const action = () => {
    checkInputs();
    newNote();
  };

  if (data) return <SystemMessage>Complited!</SystemMessage>;
  if (loading) return <LoadingIndicator />;
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: MAIN }}>
      <View style={{ padding: 30 }}>
        {error && <Text style={style.signInFormText}>Ошибка!</Text>}
        <Text style={style.signInFormText}>Введите заголовок:</Text>
        <TextInput
          onChangeText={(text) => changeAnons(text)}
          value={anons}
          placeholder={anonsWarning}
          placeholderTextColor="red"
          style={style.signInFormTextInput}
          autoCapitalize="sentences"
          maxLength={200}
          blurOnSubmit={true}
        />
        <Text style={style.signInFormText}>Введите основной текст:</Text>
        <TextInput
          onChangeText={(text) => changeContent(text)}
          value={content}
          placeholder={contentWarning}
          placeholderTextColor="red"
          multiline={true}
          style={style.signInFormTextInput}
          autoCapitalize="sentences"
          maxLength={5000}
          textAlignVertical="top"
          numberOfLines={15}
        />

        <AddNoteButton action={action} loading={loading} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddNoteScreen;
