// app/splash.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "@/app/Components/Button";

export default function OnBoarding() {
  const router = useRouter();

  const handleNextPress = () => {
    // Navigate to the next screen (could be index or another screen)
    router.push("../Login/login"); // Adjust this to the desired screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/2ndonboard.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Find your Comfort Food here</Text>
      <Text style={styles.subtitle}>
        Here You Can find a chef or dish for every taste and color. Enjoy!
      </Text>
      <CustomButton title="Next" onPress={handleNextPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#32CD32",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
