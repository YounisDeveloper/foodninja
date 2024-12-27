import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Redirect, Stack, Slot } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLogin, setIsLogin] = useState(true); // Change this to simulate login state

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    hideSplash();
  }, []);

  // Redirect to the appropriate layout based on login state
  if (!isLogin) {
    return <Redirect href="/(auth)" />;
  }

  return <Slot />;
}
