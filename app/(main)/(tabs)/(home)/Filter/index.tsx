import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Filter = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedFood, setSelectedFood] = useState<string | null>(null);

  const handleSelect = (
    setter: React.Dispatch<React.SetStateAction<string | null>>,
    value: string
  ) => {
    setter((prev) => (prev === value ? null : value));
  };

  const handleSearch = () => {
    router.push({
      pathname: "/(home)/Filter/Explore",
      params: {
        selectedType,
        selectedLocation,
        selectedFood,
      },
    });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Find Your Favorite Food</Text>
        <View style={styles.searchBarContainer}>
          <Feather
            name="search"
            size={20}
            color="#FF7C32"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="What do you want to order?"
            placeholderTextColor="#DA6317"
            style={styles.searchInput}
          />
        </View>

        <Text style={styles.sectionTitle}>Type</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedType === "Restaurant" && styles.optionButtonSelected,
            ]}
            onPress={() => handleSelect(setSelectedType, "Restaurant")}
          >
            <Text
              style={[
                styles.optionText,
                selectedType === "Restaurant" && styles.optionTextSelected,
              ]}
            >
              Restaurant
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedType === "Popular" && styles.optionButtonSelected,
            ]}
            onPress={() => handleSelect(setSelectedType, "Menu")}
          >
            <Text
              style={[
                styles.optionText,
                selectedType === "Menu" && styles.optionTextSelected,
              ]}
            >
              Menu
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Location</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedLocation === "1 Km" && styles.optionButtonSelected,
            ]}
            onPress={() => handleSelect(setSelectedLocation, "1 Km")}
          >
            <Text
              style={[
                styles.optionText,
                selectedLocation === "1 Km" && styles.optionTextSelected,
              ]}
            >
              1 Km
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedLocation === ">10 Km" && styles.optionButtonSelected,
            ]}
            onPress={() => handleSelect(setSelectedLocation, ">10 Km")}
          >
            <Text
              style={[
                styles.optionText,
                selectedLocation === ">10 Km" && styles.optionTextSelected,
              ]}
            >
              &gt;10 Km
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedLocation === "<10 Km" && styles.optionButtonSelected,
            ]}
            onPress={() => handleSelect(setSelectedLocation, "<10 Km")}
          >
            <Text
              style={[
                styles.optionText,
                selectedLocation === "<10 Km" && styles.optionTextSelected,
              ]}
            >
              &lt;10 Km
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Food</Text>
        <View style={styles.optionsContainer}>
          {["Cake", "Soup", "Main Course", "Appetizer", "Dessert"].map(
            (item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  selectedFood === item && styles.optionButtonSelected,
                ]}
                onPress={() => handleSelect(setSelectedFood, item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedFood === item && styles.optionTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  title: {
    fontSize: 55,
    fontWeight: "900",
    color: "#09051C",
    marginBottom: 50,
    marginTop: 50,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 30,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#DA6317",
  },
  filterIcon: {
    backgroundColor: "#FFF2E7",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#09051C",
    marginVertical: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#FFF2E7",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
  },
  optionButtonSelected: {
    backgroundColor: "#FFE4D0",
  },
  optionText: {
    fontSize: 14,
    color: "#DA6317",
  },
  optionTextSelected: {
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#53E88B",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default Filter;
