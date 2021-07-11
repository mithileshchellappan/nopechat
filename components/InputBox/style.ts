import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems:'baseline'
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
    alignItems: "baseline",
    marginRight: 10,
    flex: 1,
    
  },
  textInput: {
    flex: 1,
    marginHorizontal:10
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    justifyContent: "center",
    width: 50,
    height: 50,

  }
});

export default styles;
