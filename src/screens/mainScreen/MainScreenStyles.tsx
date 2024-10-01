import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  picture: {
    width: 150,
    height: 150,
    textAlign: "left",
    borderRadius: 200 / 2,
    
    marginBottom: 30,
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingBottom: 20
  },
});
