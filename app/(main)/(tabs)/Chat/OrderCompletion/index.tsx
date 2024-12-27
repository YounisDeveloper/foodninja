import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const OrderCompletedScreen = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <Ionicons
        key={star}
        name={rating >= star ? "star" : "star-outline"}
        size={30}
        color={rating >= star ? "#FFD700" : "#E0E0E0"}
        onPress={() => setRating(star)}
        style={{ marginHorizontal: 5 }}
      />
    ));
  };
  const handleSkip = () => {
    router.push("/(main)/(tabs)/Chat/OrderCompletion/Notification");
  };
  return (
    <View style={styles.container}>
      {/* Header with avatar */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150", // Replace with actual image URL
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Thank you text */}
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.subtitle}>Order Completed</Text>

      {/* Rating prompt */}
      <Text style={styles.ratePrompt}>Please rate your last Driver</Text>
      <View style={styles.starContainer}>{renderStars()}</View>

      {/* Feedback input */}
      <View style={styles.feedbackCard}>
        <View style={styles.feedbackInputContainer}>
          <Ionicons name="pencil-outline" size={24} color="#9E9E9E" />
          <TextInput
            placeholder="Leave feedback"
            value={feedback}
            onChangeText={setFeedback}
            style={styles.feedbackInput}
          />
        </View>
      </View>

      {/* Submit and Skip buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => console.log("Submit clicked")}
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    alignItems: "center",
  },
  profileContainer: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#00C853",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#000000",
    marginBottom: 10,
  },
  ratePrompt: {
    fontSize: 16,
    color: "#9E9E9E",
    marginBottom: 20,
  },
  starContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  feedbackCard: {
    width: "100%",
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: "#FFF",
    elevation: 2, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  feedbackInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  feedbackInput: {
    marginLeft: 10,
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#00C853",
    marginRight: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  skipButton: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "600",
  },
});

export default OrderCompletedScreen;
