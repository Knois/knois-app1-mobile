import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import style from "./src/styles/style";
import AppNavigation from "./src/screens";

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
        <AppNavigation />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
