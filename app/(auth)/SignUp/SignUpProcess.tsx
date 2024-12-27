import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "@/app/Components/BackButton";
import { router } from "expo-router";

const SignUpProcess = () => {
  // State to manage input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  // Function to handle 'Next' button press
  const handleNextPress = () => {
    if (!firstName || !lastName || !mobileNumber) {
      Alert.alert("Please fill in all fields");
      return;
    }
    // Proceed with the navigation or validation logic
    router.push("./PaymentMethodScreen");
  };
  const handleBackPress = () => {
    router.back();
  };

  return (
    <ScrollView style={{ flex: 1, marginTop: 20 }}>
      <BackButton onPress={handleBackPress} />
      <View style={styles.container}>
        {/* Header and Description */}
        <Text style={styles.title}>Fill in your bio to get started</Text>
        <Text style={styles.description}>
          This data will be displayed in your account profile for security
        </Text>
        <View style={{ marginVertical: 100 }}>
          {/* Input Fields */}
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#BDBDBD"
            value={firstName}
            onChangeText={setFirstName}
            returnKeyType="next"
            autoFocus={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#BDBDBD"
            value={lastName}
            onChangeText={setLastName}
            returnKeyType="next"
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#BDBDBD"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            returnKeyType="next"
          />
        </View>
        {/* Custom Button */}
        <View style={{}}>
          <TouchableOpacity onPress={handleNextPress} style={styles.button}>
            <LinearGradient
              colors={["#53E88B", "#15BE77"]}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 30,
    fontWeight: "900",
    color: "#09051C",
    textAlign: "left",
    marginBottom: 15,
  },
  description: {
    marginVertical: 20,
    fontSize: 18,
    color: "#3B3B3B",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 15,
    backgroundColor: "#FFF",
    paddingLeft: 15,
    marginBottom: 15,
    marginVertical: 20,
  },
  button: {
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

export default SignUpProcess;
