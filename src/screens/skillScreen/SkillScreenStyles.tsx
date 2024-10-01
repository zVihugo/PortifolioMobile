import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  picture: {
    width: 150,
    height: 150,
    textAlign: "left",
    borderRadius: 200 / 2,
    marginBottom: 30,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  sectionTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  skillContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  skillText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
    marginBottom: 3
  },
  starsContainer: {
    flexDirection: "row",
  },
  botoms: {
    width: 300,
    height: 50,
    borderWidth: 1,
    fontSize: 18,
    color: "white",
    backgroundColor: "black",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 20,
    textAlign: "center",
    paddingTop: 10,
    backgroundColor: "#FFA07A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
},
  
});
