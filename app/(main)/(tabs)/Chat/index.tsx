import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const chatData = [
  {
    id: "1",
    name: "Dianne Russell",
    lastMessage: "Just to order",
    time: "20:00",
    avatar: "https://via.placeholder.com/50",
    messages: [
      { id: "1", sender: "other", message: "Just to order" },
      { id: "2", sender: "me", message: "Okay, for what level of spiciness?" },
      { id: "3", sender: "other", message: "Okay, wait a minute 👍" },
    ],
  },
  {
    id: "2",
    name: "Guy Hawkins",
    lastMessage: "Your Order Just Arrived!",
    time: "19:00",
    avatar: "https://via.placeholder.com/50",
    messages: [
      { id: "1", sender: "other", message: "Hi there!" },
      { id: "2", sender: "me", message: "Hello! How can I help you?" },
    ],
  },
  {
    id: "3",
    name: "Leslie Alexander",
    lastMessage: "See you soon!",
    time: "18:45",
    avatar: "https://via.placeholder.com/50",
    messages: [],
  },
];

export default function ChatScreen() {
  const router = useRouter();

  const handleChatPress = (item) => {
    router.push({
      pathname: "/(main)/(tabs)/Chat/ChatDetail",
      params: {
        name: item.name,
        avatar: item.avatar,
        messages: JSON.stringify(item.messages),
      },
    });
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => handleChatPress(item)}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "#888",
  },
  time: {
    fontSize: 12,
    color: "#AAA",
  },
});
