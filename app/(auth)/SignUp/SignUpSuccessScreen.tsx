import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the checkmark icon
import { router } from "expo-router";

const SignupSuccessScreen = () => {
  const handlOrderPress = () => {
    router.navigate("/(main)");
  };
  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.iconContainer}>
        <View style={styles.successIcon}>
          <Image source={require("../../../assets/images/cheked.png")} />
        </View>
      </View>

      {/* Congrats Text */}
      <Text style={styles.congratsText}>Congrats!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Your Profile Is Ready To Use</Text>

      {/* Try Order Button */}
      <TouchableOpacity style={styles.tryOrderButton} onPress={handlOrderPress}>
        <Text style={styles.tryOrderButtonText}>Try Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  iconContainer: {
    marginBottom: 30,
  },
  successIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  congratsText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 40,
  },
  tryOrderButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
  },
  tryOrderButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SignupSuccessScreen;
