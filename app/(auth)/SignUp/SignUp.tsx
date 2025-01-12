// screens/SignUpScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/app/Components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import axios from "axios";
type LinearColor = {};
const SignUpScreen = ({}: LinearColor) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [specialPricing, setSpecialPricing] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://192.168.139.73:3000/signup", {
        userName: name,
        email,
        password,
      });
      console.log("User signed up successfully:", response.data);
      router.push("/(auth)/Login/login");
      Alert.alert("SignUp Successfully");
    } catch (error) {
      Alert.alert("some thing wrong");
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error);
        if (error.response) {
          setError(error.response.data.message || "Request failed");
        } else if (error.request) {
          setError("No response received from server");
        } else {
          setError("Error setting up request");
        }
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred");
      }
    }
  };

  const handleAlreadyAccount = () => {
    router.push("/(auth)/Login/login");
  };
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image
        source={require("../../../assets/images/icon.png")} // Add your logo here
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Sign Up For Free</Text>
      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={require("../../../assets/images/Profile.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            source={require("../../../assets/images/Message.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image
            source={require("../../../assets/images/Lock.png")}
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="#ccc"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Checkbox Options */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkboxWrapper}
          onPress={() => setKeepSignedIn(!keepSignedIn)}
        >
          <AntDesign
            name={keepSignedIn ? "checkcircle" : "checkcircleo"}
            size={24}
            color="#15BE77"
          />
        </TouchableOpacity>
        <Text style={styles.checkboxText}> Keep me Signed In</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkboxWrapper}
          onPress={() => setSpecialPricing(!specialPricing)}
        >
          <AntDesign
            name={specialPricing ? "checkcircle" : "checkcircleo"}
            size={24}
            color="#15BE77"
          />
        </TouchableOpacity>
        <Text style={styles.checkboxText}> Email me about Special Pricing</Text>
      </View>

      {/* Create Account Button */}
      <CustomButton title="Create Account" onPress={handleRegister} />

      {/* Already Have an Account */}
      <TouchableOpacity onPress={handleAlreadyAccount}>
        <Text style={styles.footerText}> already have an account? </Text>
      </TouchableOpacity>
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
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  checkboxContainer: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
  },
  checkboxWrapper: {
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
  footerText: {
    color: "#32CD32",
    marginTop: 10,
    fontSize: 14,
  },
});

export default SignUpScreen;
