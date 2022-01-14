import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import style from "./src/styles/style";
import AppNavigation from "./src/screens";

export default function App() {
  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" />
    </>
  );
}
