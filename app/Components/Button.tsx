// components/CustomButton.tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  DimensionValue,
} from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  width?: DimensionValue;
  height?: number;
  borderRadius?: number;
};

const CustomButton = ({
  title,
  onPress,
  backgroundColor = "#32CD32",
  color = "#fff",
  width = "40%",
  height = 50,
  borderRadius = 25,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width, height, borderRadius }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
