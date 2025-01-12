// screens/LoginScreen.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import CustomButton from "@/app/Components/Button";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import axios from "axios";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log("Sending login request with:", { email, password });
      const response = await axios.post("http://192.168.139.73:3000/login", {
        email,
        password,
      });
      console.log("User logged in successfully:", response.data);
      Alert.alert("logged in successfully:", response.data.message);
      // Navigate to the home screen
      router.push("/(main)/(tabs)/(home)");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          setError(error.response.data.message || "Request failed");
        } else if (error.request) {
          console.error("No response received:", error.request);
          setError("No response received from server");
        } else {
          console.error("Error setting up request:", error.message);
          setError("Error setting up request");
        }
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred");
      }
    }
  };

  const handleForgotPassword = () => {
    router.push("/(auth)/SignUp/SignUp");
    Alert.alert("Log in successful");
  };
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image
        source={require("../../../assets/images/icon.png")} // Add your logo here
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}> Login To Your Account </Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Text style={styles.continueText}> Or Continue With </Text>

      {/* Social Media Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="white" />
          <Text style={styles.socialText}> Facebook </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={24} color="white" />
          <Text style={styles.socialText}> Google </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}> Forgot Your Password? </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  continueText: {
    fontSize: 16,
    color: "#09051C",
    marginVertical: 10,
    fontWeight: "900",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1877F2", // Facebook color
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    width: "45%",
    justifyContent: "center",
  },
  socialText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },

  forgotPassword: {
    color: "#1877F2",
    marginBottom: 20,
    alignSelf: "center",
    textAlign: "center",
    width: 150,
  },
});

export default LoginScreen;
