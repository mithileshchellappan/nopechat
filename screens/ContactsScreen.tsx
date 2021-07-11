import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import EditScreenInfo from "../components/EditScreenInfo";
import NewMessageButton from "../components/NewMessageButton";
import { Text, View } from "../components/Themed";
import users from '../data/Users'

import chatRooms from "../data/ChatRooms";
import ContactListItem from "../components/ContactListItem";

export default function Contacts() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item, index) => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
