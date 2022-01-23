import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoteScreen from "../NoteScreen";
import Feed from "../Feed";
import RefreshButton from "../../components/RefreshButton";
import AddNoteScreen from "../AddNoteScreen";

const FeedStack = createNativeStackNavigator();
const FeedStackScreen = () => {
  return (
    <FeedStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <FeedStack.Screen
        name="Feed"
        component={Feed}
        options={{ title: "Главная" }}
      />
      <FeedStack.Screen name="NoteScreen" component={NoteScreen} />

      <FeedStack.Screen
        name="AddNoteScreen"
        component={AddNoteScreen}
        options={{
          title: "Добавление новости",
        }}
      />
    </FeedStack.Navigator>
  );
};
export default FeedStackScreen;
