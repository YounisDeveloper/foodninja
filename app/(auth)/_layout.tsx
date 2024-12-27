import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
type Props = {};

const Navigation = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Navigation;
