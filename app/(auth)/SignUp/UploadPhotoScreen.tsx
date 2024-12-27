import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons"; // For the cancel icon
import { router } from "expo-router";

const UploadPhotoProfile = () => {
  const [image, setImage] = useState<string | null>(null);

  // Function to pick an image from the gallery
  const pickImageFromGallery = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted) {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio
        quality: 1,
      });

      if (!pickerResult.canceled) {
        setImage(pickerResult.assets[0].uri);
      }
    } else {
      alert("Permission to access gallery is required!");
    }
  };

  // Function to take a new photo using the camera
  const takePhoto = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (result.granted) {
      const pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio
        quality: 1,
      });

      if (!pickerResult.canceled) {
        setImage(pickerResult.assets[0].uri);
      }
    } else {
      alert("Permission to access camera is required!");
    }
  };

  // Function to remove the selected image
  const removeImage = () => {
    setImage(null);
  };
  const handleNextPress = () => {
    router.navigate("./SetLocationScreen");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => alert("Go back")}
      >
        <Ionicons name="chevron-back" size={24} color="orange" />
      </TouchableOpacity>

      <Text style={styles.title}>Upload Your Photo Profile</Text>
      <Text style={styles.subtitle}>
        This data will be displayed in your account profile for security
      </Text>

      {/* Image Preview */}
      {image ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.imagePreview} />
          <TouchableOpacity
            style={styles.removeImageButton}
            onPress={removeImage}
          >
            <Ionicons name="close-circle" size={30} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={pickImageFromGallery}
          >
            <Image source={require("../../../assets/images/Gallery.png")} />
            <Text style={styles.buttonText}>From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
            <Image source={require("../../../assets/images/camera.png")} />
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      )}

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
  buttonContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  uploadButton: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  imageContainer: {
    position: "relative",
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  removeImageButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#00000080", // Semi-transparent black background
    borderRadius: 50,
    padding: 2,
  },
  nextButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default UploadPhotoProfile;
