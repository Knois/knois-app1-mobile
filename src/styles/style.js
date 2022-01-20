import { StyleSheet } from "react-native";
import {
  MAIN,
  MAIN_LIGHT,
  SECONDARY,
  SECONDARY_DARK,
  WHITE,
} from "./constants";

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: MAIN },
  noteFeedItemContainer: {
    borderWidth: 1,
    height: 200,
    width: "80%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: MAIN_LIGHT,
    position: "relative",
  },
  updatedAtContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  favoritesCountContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  tabBarContainer: {
    flexDirection: "row",
    backgroundColor: SECONDARY_DARK,
    height: 70,
    alignSelf: "center",
  },
  signInFormText: {
    marginVertical: 10,
    marginLeft: 10,
    fontSize: 15,
    color: SECONDARY_DARK,
  },
  signInFormTextInput: {
    borderColor: SECONDARY_DARK,
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: MAIN_LIGHT,
  },
  signInFormPasswordInput: {
    borderColor: SECONDARY_DARK,
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: MAIN_LIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signInButton: {
    marginVertical: 40,
    padding: 20,
    alignItems: "center",
    backgroundColor: SECONDARY_DARK,
    borderRadius: 20,
  },
  signInButtonText: { color: WHITE, fontWeight: "bold", fontSize: 15 },
  signInTitle: {
    marginTop: 40,
    fontSize: 40,
    marginBottom: 40,
    alignSelf: "center",
    color: SECONDARY_DARK,
  },
  noteScreenTitle: { color: SECONDARY_DARK, fontSize: 30, fontWeight: "bold" },
});

export default style;
