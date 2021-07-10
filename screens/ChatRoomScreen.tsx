import React from "react";
import { FlatList, ImageBackground } from "react-native";
import chatRoomData from "../data/Chat";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
const ChatRoomScreen = () => {
  //   const route = useRoute();

  return (
    <ImageBackground style={{width:'100%',height:'100%'}} source={require('../assets/images/BG.png')}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
