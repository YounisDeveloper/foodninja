import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Find Your Favorite Food</Text>
      <TouchableOpacity style={styles.notificationIcon}>
        <Ionicons name="notifications-outline" size={30} color="#53E88B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: "900",
    color: "#09051C",
  },
  notificationIcon: {
    padding: 10,
  },
});

export default Header;
