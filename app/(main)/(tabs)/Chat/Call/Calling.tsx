import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ActiveCallScreen() {
  const [callDuration, setCallDuration] = useState(0); // Duration in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1); // Increment duration every second
    }, 1000);

    return () => clearInterval(interval); // Clear interval when the component unmounts
  }, []);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleMute = () => {
    // Logic for muting the call
    console.log("Muted");
  };

  const handleEndCall = () => {
    // Logic for ending the call
    console.log("Call Ended");
  };

  return (
    <View style={styles.container}>
      {/* Avatar and Name */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/120" }} // Replace with actual avatar URL
          style={styles.avatar}
        />
        <Text style={styles.name}>Courtney Henry</Text>
        <Text style={styles.callDuration}>{formatDuration(callDuration)}</Text>
      </View>

      {/* Call Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.muteButton} onPress={handleMute}>
          <Ionicons name="mic-off" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.endCallButton} onPress={handleEndCall}>
          <Ionicons name="close" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#34C759",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 16,
  },
  callDuration: {
    fontSize: 16,
    color: "#888",
    marginTop: 8,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  muteButton: {
    backgroundColor: "#34C759",
    padding: 16,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  endCallButton: {
    backgroundColor: "#FF3B30",
    padding: 16,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
