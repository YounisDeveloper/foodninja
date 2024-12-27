import { RestaurentData } from "@/constants/RestaurentData";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
} from "react-native";
type Restaurents = {
  id: number;
  name: string;
  img: ImageSourcePropType;
  time: string;
};
const RestaurantList = () => {
  const renderitem = ({ item }: { item: Restaurents }) => {
    return (
      <ScrollView nestedScrollEnabled={true}>
        <TouchableOpacity style={styles.restaurantCard}>
          <Image source={item.img} style={styles.restaurantImage} />
          <Text style={styles.restaurantName}> {item.name} </Text>
          <Text style={styles.restaurantDistance}> {item.time} </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  return (
    <View>
      <FlatList
        data={RestaurentData}
        horizontal
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        showsHorizontalScrollIndicator={false}
        renderItem={renderitem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },

  restaurantCard: {
    width: 150,
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginRight: 15,
    padding: 15,
    alignItems: "center",
  },
  restaurantImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  restaurantDistance: {
    fontSize: 12,
    color: "#B0B0B0",
  },
});

export default RestaurantList;
