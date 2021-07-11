import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View,  TextInput } from "react-native";
import styles from "./style";
const InputBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5  name="laugh-beam"  size={24} color="grey" />
        <TextInput keyboardType="default" multiline={true} style={styles.textInput}/>
        <Entypo style={{marginRight:10}} name="attachment" size={24} color="grey"/>
        <Fontisto name="camera" size={24} color="grey"/>

      </View>
      <View style={styles.buttonContainer}>
        <MaterialCommunityIcons name="microphone" size={28} color="white" />
      </View>
    </View>
  );
};

export default InputBox;
