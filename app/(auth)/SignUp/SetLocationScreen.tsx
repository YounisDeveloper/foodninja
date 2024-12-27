import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons"; // For the back button and location icon
import { router } from "expo-router";

const SetLocationScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Function to get location
  const handleSetLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const userLocation = await Location.getCurrentPositionAsync({});
    setLocation(userLocation);
  };
  const handleNextPress = () => {
    router.navigate("./SignUpSuccessScreen");
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => alert("Go back")}
      >
        <Ionicons name="chevron-back" size={24} color="orange" />
      </TouchableOpacity>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Set Your Location</Text>
      <Text style={styles.subtitle}>
        This data will be displayed in your account profile for security
      </Text>

      {/* Location Section */}
      <View style={styles.locationContainer}>
        <Ionicons
          name="location"
          size={24}
          color="orange"
          style={styles.locationIcon}
        />
        <Text style={styles.locationText}>
          {location
            ? `Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`
            : "Your Location"}
        </Text>
      </View>

      {/* Set Location Button */}
      <TouchableOpacity
        style={styles.setLocationButton}
        onPress={handleSetLocation}
      >
        <Text style={styles.setLocationButtonText}>Set Location</Text>
      </TouchableOpacity>

      {/* Error message if permission denied */}
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 80,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  locationIcon: {
    marginRight: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  setLocationButton: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  setLocationButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  nextButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default SetLocationScreen;
