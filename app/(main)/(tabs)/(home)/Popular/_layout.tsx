//import liraries
import { Stack } from "expo-router";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default _layout;
