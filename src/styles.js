import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end"
  },
  result: {
    color: "black",
    fontSize: 56,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
  buttonPanel: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  numberPanel: {
    flex: 3
  },
  operatorPanel: {
    flex: 1
  },
  buttonText: {
    color: "#010101",
    fontSize: 32
  },
  button: {
    backgroundColor: "#dddddd",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10
  },
  row: {
    flexDirection: "row"
  }
});