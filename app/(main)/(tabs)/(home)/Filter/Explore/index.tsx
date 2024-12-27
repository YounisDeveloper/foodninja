import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router"; // Use Expo Router hooks
import { PopularMenuData } from "@/constants/PopularMenuData";
import Header from "@/app/Components/Header";
import SearchBar from "@/app/Components/SearchBar";
import { RestaurentData } from "@/constants/RestaurentData";
const ExploreResults = () => {
  const router = useRouter();
  const { selectedType, selectedLocation, selectedFood } =
    useLocalSearchParams(); // Fetch search parameters
  const restaurantsToDisplay =
    selectedType === "Menu" ? PopularMenuData : RestaurentData;
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <View>
        <SearchBar />
      </View>

      {/* Selected Filters */}
      <View style={styles.filtersContainer}>
        {selectedLocation && (
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>{selectedLocation}</Text>
          </TouchableOpacity>
        )}
        {selectedFood && (
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>{selectedFood}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Popular or Nearest Restaurants */}
      <Text style={styles.sectionTitle}>
        {selectedType === "Popular" ? "Restaurants" : "Menu"}
      </Text>
      <ScrollView contentContainerStyle={styles.restaurantsContainer}>
        {restaurantsToDisplay.map((restaurant, index) => (
          <View key={index} style={styles.restaurantCard}>
            <Image source={restaurant.img} style={styles.restaurantImage} />
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantTime}>{restaurant.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ExploreResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 16,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    color: "#09051C",
    fontSize: 16,
  },
  filtersContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  filterChip: {
    backgroundColor: "#FFEDCC",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  filterText: {
    color: "#FF7C32",
    fontSize: 14,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#09051C",
    marginBottom: 12,
  },
  restaurantsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  restaurantCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#09051C",
    marginBottom: 4,
  },
  restaurantTime: {
    fontSize: 14,
    color: "#B6B6B6",
  },
});
