import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import styles from "./styles";
const NewMessageButton = () => {
  return (
    <View style={[styles.container]}>
      <MaterialCommunityIcons name="message-text" size={28} color="white" />
    </View>
  );
};

export default NewMessageButton;
