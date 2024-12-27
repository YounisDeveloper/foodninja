import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function CallFlowScreen() {
  const [isCalling, setIsCalling] = useState(true); // Initially on the "Calling" screen
  const [callDuration, setCallDuration] = useState(0); // Call duration for Active Call screen

  // Transition from "Calling" to "Active Call" after 3 seconds
  useEffect(() => {
    if (isCalling) {
      const timer = setTimeout(() => {
        setIsCalling(false); // Transition to Active Call
      }, 3000); // 3-second delay

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [isCalling]);

  // Increment call duration for the "Active Call" screen
  useEffect(() => {
    if (!isCalling) {
      const interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isCalling]);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleMute = () => {
    console.log("Muted");
  };

  const handleEndCall = () => {
    router.push("/(main)/(tabs)/Chat/OrderCompletion");
  };

  if (isCalling) {
    // "Calling" Screen
    return (
      <View style={styles.callingContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/120" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Courtney Henry</Text>
        <Text style={styles.callingStatus}>Ringing...</Text>
        <View style={styles.callingControls}>
          <TouchableOpacity
            style={styles.endCallButton}
            onPress={handleEndCall}
          >
            <Ionicons name="close" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // "Active Call" Screen
  return (
    <View style={styles.activeCallContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/120" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Courtney Henry</Text>
        <Text style={styles.callDuration}>{formatDuration(callDuration)}</Text>
      </View>
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
  // General Styles
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
  endCallButton: {
    backgroundColor: "#FF3B30",
    padding: 16,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  // Calling Screen Styles
  callingContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
  },
  callingStatus: {
    fontSize: 18,
    color: "#888",
    marginTop: 8,
  },
  callingControls: {
    marginTop: 40,
  },

  // Active Call Screen Styles
  activeCallContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  avatarContainer: {
    alignItems: "center",
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
});
