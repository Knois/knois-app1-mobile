import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import style from "../styles/style";
import { SECONDARY, SECONDARY_DARK, WHITE } from "../styles/constants";
import AddNoteButton from "./AddNoteButton";

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <>
      <View style={style.tabBarContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          let isFocusedTab = isFocused ? WHITE : SECONDARY;

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignSelf: "center",
                alignItems: "center",
              }}
              key={index}
            >
              {index == 0 ? (
                <Ionicons name="home" size={40} color={isFocusedTab} />
              ) : index == 1 ? (
                <Ionicons name="document-text" size={40} color={isFocusedTab} />
              ) : index == 2 ? (
                <AntDesign name="heart" size={35} color={isFocusedTab} />
              ) : (
                <FontAwesome name="user" size={40} color={isFocusedTab} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 35,
          width: "16%",
          height: 70,
          backgroundColor: SECONDARY_DARK,
          borderRadius: 40,
          left: "42%",
        }}
      >
        <AddNoteButton style={{ alignSelf: "center" }} />
      </View>
    </>
  );
};

export default MyTabBar;
