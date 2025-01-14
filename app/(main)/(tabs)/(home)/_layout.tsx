import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Filter" />
      <Stack.Screen name="ViewMore" />
    </Stack>
  );
}
