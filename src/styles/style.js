import { StyleSheet } from "react-native";
import { MAIN, SECONDARY_DARK, WHITE } from "./constants";

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: MAIN },
  noteFeedItemContainer: {
    borderWidth: 1,
    height: 200,
    width: "80%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: WHITE,
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default style;
