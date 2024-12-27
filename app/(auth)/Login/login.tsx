// screens/LoginScreen.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import CustomButton from "@/app/Components/Button";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
const LoginScreen = () => {
  const router = useRouter();

  const handleNextPress = () => {
    // Navigate to the next screen (could be index or another screen)
    router.push("../SignUp/SignUp"); // Adjust this to the desired screen
  };

  const handleForgotPassword = () => {
    router.navigate("./ForgotPasswordScreen");
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
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
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
      <CustomButton title="Login" onPress={handleNextPress} />
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
