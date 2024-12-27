import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { PopularMenuData } from "@/constants/PopularMenuData";

type Restaurant = {
  id: number;
  name: string;
  img: ImageSourcePropType;
  hotelname: string;
  price: string;
};

const PopularMenu = () => {
  const sections = [
    {
      title: "Popular Menu",
      data: Array.isArray(PopularMenuData) ? PopularMenuData : [],
    },
  ];

  const renderItem = ({ item }: { item: Restaurant }) => (
    <TouchableOpacity style={styles.menuCard} activeOpacity={0.6}>
      <Image source={item.img} style={styles.menuImage} />

      <View style={{ alignItems: "center" }}>
        <Text style={styles.menuName}> {item.name} </Text>
        <Text style={styles.menuHotelName}> {item.hotelname} </Text>
      </View>

      <Text style={styles.menuPrice}> {item.price} </Text>
    </TouchableOpacity>
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) =>
        item.id ? item.id.toString() : index.toString()
      }
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF7C32",
  },
  viewMoreText: {
    color: "#53E88B",
    fontSize: 14,
  },
  listContent: {
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  menuCard: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuImage: {
    width: "30%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuTextContainer: {},
  menuName: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  menuPrice: {
    fontSize: 25,
    color: "#FEAD1D",
    fontWeight: "900",
  },
  menuHotelName: {
    fontSize: 17,
    color: "#B0B0B0",
    textAlign: "center",
  },
});

export default PopularMenu;
