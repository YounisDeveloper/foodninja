import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const notifications = [
  {
    id: "1",
    message: "Your order has been taken by the driver",
    time: "Recently",
    type: "success",
  },
  {
    id: "2",
    message: "Topup for $100 was successful",
    time: "10:00 AM",
    type: "info",
  },
  {
    id: "3",
    message: "Your order has been canceled",
    time: "22 June 2021",
    type: "error",
  },
];

const NotificationScreen = () => {
  const renderNotification = ({
    item,
  }: {
    item: (typeof notifications)[number];
  }) => {
    let icon;
    let iconColor;

    switch (item.type) {
      case "success":
        icon = "check-circle";
        iconColor = "green";
        break;
      case "info":
        icon = "money-off";
        iconColor = "gold";
        break;
      case "error":
        icon = "cancel";
        iconColor = "red";
        break;
      default:
        icon = "info";
        iconColor = "gray";
    }

    return (
      <View style={styles.notificationContainer}>
        <MaterialIcons name={icon} size={24} color={iconColor} />
        <View style={styles.textContainer}>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    marginBottom: 8,
  },
  textContainer: {
    marginLeft: 12,
  },
  message: {
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});

export default NotificationScreen;
