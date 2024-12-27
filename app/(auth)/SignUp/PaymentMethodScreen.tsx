import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import BackButton from "@/app/Components/BackButton";

const PaymentMethodScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    {
      id: "paypal",
      label: "PayPal",
      icon: require("../../../assets/images/paypal.png"),
      url: "https://www.paypal.com",
    },
    {
      id: "visa",
      label: "VISA",
      icon: require("../../../assets/images/visa-icon.png"),
      url: "https://www.visa.com",
    },
    {
      id: "payoneer",
      label: "Payoneer",
      icon: require("../../../assets/images/payoneer.png"),
      url: "https://www.payoneer.com",
    },
  ];

  const openURL = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Can't open this URL: ${url}`);
    }
  };

  const handlePaymentMethodPress = (method: { id: string; url: string }) => {
    // Set the selected method and open the URL
    setSelectedMethod(method.id);
    openURL(method.url);
  };
  const NextScreen = () => {
    router.push("./UploadPhotoScreen");
  };
  const handleBackPress = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <BackButton onPress={handleBackPress} />
      </View>

      {/* Header and Description */}
      <Text style={styles.title}>Payment Method</Text>
      <Text style={styles.description}>
        This data will be displayed in your account profile for security
      </Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* Payment Method Options */}
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.methodButton,
              selectedMethod === method.id && styles.selectedMethod, // Apply selected style if the method is selected
            ]}
            onPress={() => handlePaymentMethodPress(method)} // Combine setSelectedMethod and openURL
          >
            <Image source={method.icon} style={styles.methodIcon} />
            <Text style={styles.methodText}>{method.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={NextScreen}>
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
  },
  methodButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 15,
    backgroundColor: "#FFF",
    marginBottom: 15,
  },
  selectedMethod: {
    borderColor: "#53E88B", // Highlight selected method with a border color
  },
  methodIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 15,
  },
  methodText: {
    fontSize: 16,
    color: "#09051C",
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

export default PaymentMethodScreen;
