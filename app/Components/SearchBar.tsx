import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const SearchBar = () => {
  const handleFilter = () => {
    router.push("/(home)/Filter");
  };
  return (
    <View style={styles.searchContainer}>
      {/* Search Bar */}
      <View style={styles.inputWrapper}>
        <Feather
          name="search"
          size={20}
          color="#FF7C32"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="What do you want to order?"
          placeholderTextColor="#FF7C32"
          style={styles.input}
        />
      </View>

      {/* Filter Icon */}
      <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
        <MaterialIcons name="tune" size={20} color="#FF7C32" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFF",
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    fontSize: 16,
    color: "#FF7C32",
    flex: 1,
  },
  filterButton: {
    backgroundColor: "#FFFF",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchBar;
