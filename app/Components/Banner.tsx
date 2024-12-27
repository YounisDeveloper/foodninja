import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={require("../../assets/images/icecream.png")} // Replace with your image path
        style={styles.bannerImage}
      />

      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerText}>Special Deal For October</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#53E88B",
    borderRadius: 15,
    margin: 10,
    overflow: "hidden",
    alignItems: "flex-end",
  },
  bannerImage: {
    width: "100%",
    height: 150,
  },
  bannerTextContainer: {
    position: "absolute",
    marginLeft: 200,
    right: 30,
    top: 20,
  },
  bannerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bannerButton: {
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 15,
  },
  bannerButtonText: {
    color: "#53E88B",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Banner;
