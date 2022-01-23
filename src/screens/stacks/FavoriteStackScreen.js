import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteScreen from "../NoteScreen";
import Favorites from "../Favorites";
import RefreshButton from "../../components/RefreshButton";
import AddNoteScreen from "../AddNoteScreen";

const FavoriteStack = createNativeStackNavigator();
const FavoriteStackScreen = () => {
  return (
    <FavoriteStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <FavoriteStack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Избранное",
        }}
      />
      <FavoriteStack.Screen name="NoteScreen" component={NoteScreen} />
      <FavoriteStack.Screen
        name="AddNoteScreen"
        component={AddNoteScreen}
        options={{
          title: "Добавление новости",
        }}
      />
    </FavoriteStack.Navigator>
  );
};
export default FavoriteStackScreen;
