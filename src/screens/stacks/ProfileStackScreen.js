import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../Profile";

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <ProfileStack.Screen
        name="Профиль"
        component={Profile}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;
