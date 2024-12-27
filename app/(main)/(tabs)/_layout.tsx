import { Tabs, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

export default function TabLayout() {
  const [hasNotification, setHasNotification] = useState(true);
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
            case "(home)": // Matches the folder structure
              iconName = focused ? "home" : "home-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            case "Cart":
              iconName = focused ? "cart" : "cart-outline";
              break;
            case "Chat":
              iconName = focused
                ? "chatbubble-ellipses"
                : "chatbubble-ellipses-outline";
              break;
            default:
              iconName = "alert-circle-outline";
          }

          return (
            <View style={styles.tabItem}>
              {/* Icon */}
              <View style={styles.iconWrapper}>
                <Ionicons name={iconName} size={24} color={color} />
                {route.name === "ChatScreen" && hasNotification && (
                  <View style={styles.notificationBadge} />
                )}
              </View>

              {/* Label */}
              {focused && (
                <Text style={[styles.label, { color }]}>
                  {route.name === "(home)" ? "Home" : route.name}
                </Text>
              )}
            </View>
          );
        },
        tabBarShowLabel: false, // Disable default tab bar labels
        tabBarActiveTintColor: "#53E88B",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          ...styles.tabBarStyle, // Use custom styles for the tab bar
        },

        headerShown: false,
      })}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "Home", // Set a custom tab title
          title: "Home", // Set a custom header title if needed
        }}
      />
      <Tabs.Screen name="Profile" options={{ tabBarLabel: "Profile" }} />
      <Tabs.Screen
        name="Chat"
        options={{ title: "Chat", tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen name="Cart" options={{ title: "Cart" }} />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  tabItem: {
    flexDirection: "row", // Arrange icon and label in a row
    alignItems: "center", // Center them vertically
    justifyContent: "center", // Center them horizontally
  },
  label: {
    fontSize: 14,
    fontWeight: "900",
    marginLeft: 8, // Add spacing between icon and label
    textAlign: "center",
  },
  tabBarStyle: {
    position: "absolute", // Make the tab bar float
    bottom: 10, // Raise the tab bar slightly

    height: 74,
    borderRadius: 10, // Rounded edges
    backgroundColor: "#FFF", // Semi-transparent background
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4, // Elevation for shadow effect
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.8,
    elevation: 2, // Android shadow
    borderWidth: 1, // Optional: border for more emphasis
    borderColor: "rgba(0,0,0,0.1)",
  },
  iconWrapper: {
    position: "relative", // Allows the badge to be positioned relative to the icon
    alignItems: "center",
    justifyContent: "center",
  },
  notificationBadge: {
    position: "absolute",
    top: -5, // Position above the icon
    right: -5, // Position to the right of the icon
    width: 10,
    height: 10,
    borderRadius: 5, // Circular shape
    backgroundColor: "red",
  },
});
