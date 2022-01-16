import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../Profile";
import Settings from "../Settings";

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Профиль" }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Настройки" }}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;
