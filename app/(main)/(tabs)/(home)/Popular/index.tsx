import Header from "@/app/Components/Header";
import SearchBar from "@/app/Components/SearchBar";
import { PopularMenuData } from "@/constants/PopularMenuData";
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

type Restaurents = {
  id: number;
  name: string;
  img: ImageSourcePropType;
  time: string;
  hotelname: string;
  price: string;
};

const PopularRest = () => {
  const PopularCardItem = ({ item }: { item: Restaurents }) => (
    <View style={styles.cardpoplar}>
      <Image source={item.img} style={styles.imagePopular} />
      <View style={styles.popularDetails}>
        <Text style={styles.titlePopular}>{item.name}</Text>

        <Text style={styles.hotelNamePopular}>{item.hotelname}</Text>
      </View>
      <Text style={styles.pricePopular}>{item.price}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Text style={styles.screenTitle}>Popular Menu</Text>
      <FlatList
        data={PopularMenuData} // Use the same data as RestaurantList
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={PopularCardItem}
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
    fontWeight: "900",
    color: "#09051C",
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },

  cardpoplar: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
  },
  popularDetails: {
    flex: 1,
  },
  imagePopular: {
    width: 64,
    height: 64,
    resizeMode: "cover",
    borderRadius: 12,
    marginRight: 16,
  },

  titlePopular: {
    fontSize: 16,
    fontWeight: "900",
    color: "#09051C",
    textAlign: "center",
  },

  hotelNamePopular: {
    fontSize: 14,
    color: "#9E9E9E", // Lighter gray color for hotel name
    marginTop: 4,
    textAlign: "center",
  },
  pricePopular: {
    fontSize: 20,
    color: "#FF7C32",
    marginTop: 4,
    textAlign: "center",
    fontWeight: "900",
  },
});

export default PopularRest;
