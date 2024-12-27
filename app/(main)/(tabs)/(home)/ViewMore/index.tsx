import React from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { RestaurentData } from "@/constants/RestaurentData"; // Import restaurant data

type Restaurents = {
  id: number;
  name: string;
  img: ImageSourcePropType;
  time: string;
};

const NearestRest = () => {
  const renderitem = ({ item }: { item: Restaurents }) => {
    return (
      <TouchableOpacity style={styles.restaurantCard}>
        <Image source={item.img} style={styles.restaurantImage} />
        <Text style={styles.restaurantName}> {item.name} </Text>
        <Text style={styles.restaurantDistance}> {item.time} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>All Restaurants</Text>
      <FlatList
        data={RestaurentData} // Use the same data as RestaurantList
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={renderitem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#09051C",
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  restaurantCard: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  restaurantDistance: {
    fontSize: 12,
    color: "#B0B0B0",
  },
});

export default NearestRest;
