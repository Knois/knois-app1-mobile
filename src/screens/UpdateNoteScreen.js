import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UPDATE_NOTE } from "../API/Mutation";
import AcceptButton from "../components/AcceptButton";
import { MAIN } from "../styles/constants";
import style from "../styles/style";
import LoadingIndicator from "../components/LoadingIndicator";
import SystemMessage from "../components/SystemMessage";

const UpdateNoteScreen = ({ navigation, route }) => {
  const { id, anons, content } = route.params;
  const [anonsUpdated, changeAnonsUpdated] = useState(anons);
  const [contentUpdated, changeContentUpdated] = useState(content);
  const [anonsWarning, setAnonsWarning] = useState("");
  const [contentWarning, setContentWarning] = useState("");
  const [updateNote, { loading, data, error }] = useMutation(UPDATE_NOTE, {
    variables: {
      anons: anonsUpdated,
      content: contentUpdated,
      id: id,
    },
  });

  useEffect(() => {
    setAnonsWarning("");
  }, [anonsUpdated]);
  useEffect(() => {
    setContentWarning("");
  }, [contentUpdated]);

  const checkInputs = () => {
    anonsUpdated ? {} : setAnonsWarning("Введите заголовок");
    contentUpdated ? {} : setContentWarning("Введите заголовок");
  };
  const action = () => {
    checkInputs();
    updateNote();
  };
  const goBack = () => {
    navigation.goBack();
  };

  if (data) {
    return <SystemMessage>Complited!</SystemMessage>;
  }
  if (loading) return <LoadingIndicator />;
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: MAIN }}>
      <View style={{ padding: 30 }}>
        {error && <Text style={style.signInFormText}>Ошибка!</Text>}
        <Text style={style.signInFormText}>Введите заголовок:</Text>
        <TextInput
          onChangeText={(text) => changeAnonsUpdated(text)}
          value={anonsUpdated}
          placeholder={anonsWarning}
          placeholderTextColor="red"
          style={style.signInFormTextInput}
          autoCapitalize="sentences"
          maxLength={200}
          blurOnSubmit={true}
        />
        <Text style={style.signInFormText}>Введите основной текст:</Text>
        <TextInput
          onChangeText={(text) => changeContentUpdated(text)}
          value={contentUpdated}
          placeholder={contentWarning}
          placeholderTextColor="red"
          multiline={true}
          style={style.signInFormTextInput}
          autoCapitalize="sentences"
          maxLength={5000}
          textAlignVertical="top"
          numberOfLines={15}
        />

        <AcceptButton action={action} loading={loading} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default UpdateNoteScreen;
