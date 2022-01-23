import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoteScreen from "../NoteScreen";
import MyNotes from "../MyNotes";
import RefreshButton from "../../components/RefreshButton";
import AddNoteScreen from "../AddNoteScreen";

const MyNotesStack = createNativeStackNavigator();

const MyNotesStackScreen = () => {
  return (
    <MyNotesStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <MyNotesStack.Screen
        name="MyNotes"
        component={MyNotes}
        options={{ title: "Мои заметки" }}
      />
      <MyNotesStack.Screen name="NoteScreen" component={NoteScreen} />
    </MyNotesStack.Navigator>
  );
};
export default MyNotesStackScreen;
