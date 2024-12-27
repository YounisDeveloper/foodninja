import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

type RootStackParamList = {
  Verification: undefined;
  Home: undefined; // Add your next screen name here
};

interface VerificationScreenProps {
  phoneNumber?: string;
  onSubmit?: (code: string) => void;
  expiryMinutes?: number;
  onResendCode?: () => Promise<void>;
}

const CELL_COUNT = 4;
const CELL_SIZE = 40;
const RESEND_COOLDOWN = 30; // Cooldown period in seconds

export default function VerificationScreen({
  phoneNumber = "+6282045****",
  onSubmit,
  expiryMinutes = 1,
  onResendCode,
}: VerificationScreenProps) {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(expiryMinutes * 60);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [resendCooldown]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleCodeChange = (text: string) => {
    if (text.length <= CELL_COUNT && /^\d*$/.test(text)) {
      setCode(text);
    }
  };

  const handleResendCode = async () => {
    if (isResendDisabled) return;

    setIsResendDisabled(true);
    setResendCooldown(RESEND_COOLDOWN);

    try {
      await onResendCode?.();
      setTimeLeft(expiryMinutes * 60); // Reset the expiry timer
      Alert.alert("Success", "Verification code has been resent");
    } catch (error) {
      Alert.alert("Error", "Failed to resend verification code");
      setIsResendDisabled(false);
      setResendCooldown(0);
    }
  };

  const handleSubmit = async () => {
    if (code.length !== CELL_COUNT || loading) return;

    setLoading(true);
    try {
      onSubmit?.(code);
      // Navigate to next screen on successful verification
      router.replace("./SignUp");
    } catch (error) {
      Alert.alert("Error", "Invalid verification code");
    } finally {
      setLoading(false);
    }
  };

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < CELL_COUNT; i++) {
      cells.push(
        <View key={i} style={styles.cell}>
          <Text style={styles.cellText}>{code[i] || ""}</Text>
        </View>
      );
    }
    return cells;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter 4-digit{"\n"}Verification code</Text>

        <Text style={styles.subtitle}>
          Code send to {phoneNumber}. This code will expired in{" "}
          {formatTime(timeLeft)}
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.inputContainer}
          onPress={() => inputRef.current?.focus()}
        >
          <View style={styles.cellsContainer}>{renderCells()}</View>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleCodeChange}
            keyboardType="number-pad"
            style={styles.hiddenInput}
            maxLength={CELL_COUNT}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resendContainer}
          onPress={handleResendCode}
          disabled={isResendDisabled}
        >
          <Text
            style={[
              styles.resendText,
              isResendDisabled && styles.resendTextDisabled,
            ]}
          >
            {isResendDisabled
              ? `Resend code in ${resendCooldown}s`
              : "Resend code"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.submitButton,
            { opacity: code.length === CELL_COUNT && !loading ? 1 : 0.5 },
          ]}
          disabled={code.length !== CELL_COUNT || loading}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>
            {loading ? "Verifying..." : "Next"}
          </Text>
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
    marginBottom: 40,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  cellsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: 280,
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderBottomWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontSize: 24,
    fontWeight: "500",
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
  resendContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  resendText: {
    color: "#FF7755",
    fontSize: 14,
    fontWeight: "600",
  },
  resendTextDisabled: {
    color: "#999",
  },
  submitButton: {
    backgroundColor: "#4CD964",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 40,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
