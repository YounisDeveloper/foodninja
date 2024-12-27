import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to handle "Next" button press
  const handleNextPress = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Please fill in both fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    Alert.alert("Password reset successfully!");
    // Proceed to the next step, or navigate to a different screen
  };

  return (
    <View style={styles.container}>
      {/* Header and Description */}
      <Text style={styles.title}>Reset your password here</Text>
      <Text style={styles.description}>
        Select which contact details should we use to reset your password
      </Text>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={!showNewPassword}
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowNewPassword(!showNewPassword)}
        >
          <Ionicons
            name={showNewPassword ? "eye" : "eye-off"}
            size={24}
            color="#53E88B"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={!showConfirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Ionicons
            name={showConfirmPassword ? "eye" : "eye-off"}
            size={24}
            color="#53E88B"
          />
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity onPress={handleNextPress} style={styles.button}>
        <LinearGradient
          colors={["#53E88B", "#15BE77"]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

// Stylesheet for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#F7F7F7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#09051C",
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: "#3B3B3B",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingHorizontal: 15,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#09051C",
  },
  eyeIcon: {
    marginLeft: 10,
  },
  button: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  gradientButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResetPasswordScreen;
