import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons"; // For the checkmark icon
import { router } from "expo-router";

type RootStackParamList = {
  ForgotPassword: undefined;
  VerificationCode: {
    contactType: "sms" | "email";
    contactValue: string;
  };
};

interface ContactOption {
  type: "sms" | "email";
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function ForgotPasswordScreen() {
  const [selectedOption, setSelectedOption] = useState<"sms" | "email" | null>(
    null
  );

  const contactOptions: ContactOption[] = [
    {
      type: "sms",
      icon: <Ionicons name="logo-ionic" size={24} color="#4CD964" />,
      label: "Via sms:",
      value: "•••• •••• 4235",
    },
    {
      type: "email",
      icon: <Ionicons name="logo-ionic" size={24} color="#4CD964" />,
      label: "Via email:",
      value: "••••@gmail.com",
    },
  ];

  const handleNext = () => {
    if (!selectedOption) return;

    const option = contactOptions.find((opt) => opt.type === selectedOption);
    if (option) {
      router.navigate("./ResetPasswordScreen"),
        {
          contactType: option.type,
          contactValue: option.value,
        };
    }
  };

  const renderContactOption = (option: ContactOption) => (
    <TouchableOpacity
      key={option.type}
      style={[
        styles.optionContainer,
        selectedOption === option.type && styles.optionContainerSelected,
      ]}
      onPress={() => setSelectedOption(option.type)}
    >
      <View style={styles.optionContent}>
        <View style={styles.iconContainer}>{option.icon}</View>
        <View style={styles.optionDetails}>
          <Text style={styles.optionLabel}>{option.label}</Text>
          <Text style={styles.optionValue}>{option.value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Forgot password?</Text>

        <Text style={styles.subtitle}>
          Select which contact details should we{"\n"}use to reset your password
        </Text>

        <View style={styles.optionsContainer}>
          {contactOptions.map(renderContactOption)}
        </View>

        <TouchableOpacity
          style={[styles.nextButton, { opacity: selectedOption ? 1 : 0.5 }]}
          disabled={!selectedOption}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 16,
    marginTop: Platform.OS === "ios" ? 40 : 0,
  },
  backButtonText: {
    fontSize: 24,
    color: "#FF7755",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 32,
    lineHeight: 20,
  },
  optionsContainer: {
    gap: 16,
  },
  optionContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "transparent",
  },
  optionContainerSelected: {
    borderColor: "#4CD964",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#E8F8EA",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  optionDetails: {
    flex: 1,
  },
  optionLabel: {
    color: "#666",
    fontSize: 14,
    marginBottom: 4,
  },
  optionValue: {
    fontSize: 16,
    fontWeight: "500",
  },
  nextButton: {
    backgroundColor: "#4CD964",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: "auto",
    marginBottom: 32,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
