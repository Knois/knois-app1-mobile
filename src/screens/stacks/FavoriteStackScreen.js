import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoteScreen from "../NoteScreen";
import Favorites from "../Favorites";

const FavoriteStack = createNativeStackNavigator();
const FavoriteStackScreen = () => {
  return (
    <FavoriteStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <FavoriteStack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Избранное" }}
      />
      <FavoriteStack.Screen name="NoteScreen" component={NoteScreen} />
    </FavoriteStack.Navigator>
  );
};
export default FavoriteStackScreen;
