import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AuthLoading from "./AuthLoading";
import Registration from "./Registration";
import SignIn from "./SignIn";
import { AuthContext } from "../AuthContext";
import { View } from "react-native";
import style from "../styles/style";
import { theme } from "../styles/theme";
import AddNoteScreen from "./AddNoteScreen";
import BottomTabs from "./BottomTabs";

const Auth = createNativeStackNavigator();
const Main = createNativeStackNavigator();

const AppNavigation = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <View style={style.container}>
      {isAuth ? (
        <NavigationContainer theme={theme}>
          <Main.Navigator>
            <Main.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Main.Screen
              name="AddNoteScreen"
              component={AddNoteScreen}
              options={{
                title: "Добавление новости",
              }}
            />
          </Main.Navigator>
          <StatusBar style={"light"} />
        </NavigationContainer>
      ) : (
        <NavigationContainer theme={theme}>
          <Auth.Navigator screenOptions={{ headerShown: false }}>
            <Auth.Screen name="AuthLoading" component={AuthLoading} />
            <Auth.Screen name="SignIn" component={SignIn} />
            <Auth.Screen name="Registration" component={Registration} />
          </Auth.Navigator>
          <StatusBar style={"dark"} />
        </NavigationContainer>
      )}
    </View>
  );
};
export default AppNavigation;
