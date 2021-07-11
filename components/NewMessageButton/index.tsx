import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
const NewMessageButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Contacts");
  };

  return (
    <View style={[styles.container]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons name="message-text" size={24} color="white" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default NewMessageButton;
