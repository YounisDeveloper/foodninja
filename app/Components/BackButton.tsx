// components/CustomButton.tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  DimensionValue,
  Image,
} from "react-native";

type CustomButtonProps = {
  onPress: () => void;
};

const BackButton = ({ onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Image
        source={require("../../assets/images/backButton.png")}
        style={styles.BackButton}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  BackButton: {},
});

export default BackButton;
