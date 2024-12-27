import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Importing icons

export default function ChatDetail() {
  const handlCallPress = () => {
    router.push("/(main)/(tabs)/Chat/Call/");
  };
  const router = useRouter();
  const { name, avatar, messages } = useLocalSearchParams();

  // Parse messages
  const chatMessages = JSON.parse(messages || "[]");

  const renderMessageItem = ({ item }) => {
    const isMyMessage = item.sender === "me";

    return (
      <View
        style={[
          styles.messageContainer,
          isMyMessage ? styles.myMessage : styles.otherMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.chatName}>{name}</Text>
        <TouchableOpacity style={styles.callButton} onPress={handlCallPress}>
          <Ionicons name="call" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.messagesList}
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Type a message" style={styles.input} />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 12,
  },
  chatName: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  callButton: {
    marginLeft: "auto",
  },
  messagesList: {
    flexGrow: 1,
    padding: 16,
  },
  messageContainer: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: "80%",
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#EEE",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    backgroundColor: "#F9FAFB",
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
