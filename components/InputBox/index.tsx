import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
const InputBox = () => {
  const [message, setMessage] = React.useState("");

  const onMicrophonePress = () => {
    console.log("mic");
  };
  const onSendPress = () => {
    console.log("send");
    setMessage('')
  };
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          keyboardType="default"
          multiline={true}
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
        />
        <Entypo
          style={{ marginRight: 10 }}
          name="attachment"
          size={24}
          color="grey"
        />
        {!message && <Fontisto name="camera" size={24} color="grey" />}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={24} color="white" />
          ) : (
            <MaterialCommunityIcons name="send" size={24} color="white" />
          )}
          
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
