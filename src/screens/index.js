import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedStackScreen from "./stacks/FeedStackScreen";
import MyNotesStackScreen from "./stacks/MyNotesStackScreen";
import FavoriteStackScreen from "./stacks/FavoriteStackScreen";
import ProfileStackScreen from "./stacks/ProfileStackScreen";
import MyTabBar from "../components/TabBar/MyTabBar";
import AuthLoading from "./AuthLoading";
import Registration from "./Registration";
import SignIn from "./SignIn";
import { AuthContext } from "../AuthContext";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      {isAuth ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <MyTabBar {...props} />}
          >
            <Tab.Screen name="FeedStack" component={FeedStackScreen} />
            <Tab.Screen name="MyNotesStack" component={MyNotesStackScreen} />
            <Tab.Screen name="FavoritesStack" component={FavoriteStackScreen} />
            <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="AuthLoading" component={AuthLoading} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Registration" component={Registration} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
};
export default AppNavigation;
