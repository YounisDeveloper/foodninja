import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Header from "@/app/Components/Header";
import SearchBar from "@/app/Components/SearchBar";
import Banner from "@/app/Components/Banner";
import { RestaurentData } from "@/constants/RestaurentData";
import { PopularMenuData } from "@/constants/PopularMenuData";
import { router } from "expo-router";

const HomeScreen = () => {
  const handleViewRest = () => router.push("ViewMore");
  const handlePopularRest = () => router.push("Popular");

  // Single list data with sections
  const combinedData = [
    { type: "nearest", data: RestaurentData },
    { type: "popular", data: PopularMenuData },
  ];

  const renderItem = ({ item }) => {
    if (item.type === "nearest") {
      // Nearest Restaurant Section
      return (
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearest Restaurant</Text>
            <TouchableOpacity onPress={handleViewRest}>
              <Text style={styles.viewMore}> View More </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={item.data}
            keyExtractor={(restItem) => restItem.id.toString()}
            renderItem={({ item: restItem }) => (
              <NearestCardItem item={restItem} isMenu={false} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalListContent}
          />
        </View>
      );
    } else if (item.type === "popular") {
      // Popular Menu Section
      return (
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Menu</Text>
            <TouchableOpacity onPress={handlePopularRest}>
              <Text style={styles.viewMore}> View More </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={item.data}
              keyExtractor={(menuItem) => menuItem.id.toString()}
              renderItem={({ item: menuItem }) => (
                <PopularCardItem item={menuItem} isMenu={true} />
              )}
              numColumns={1}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.verticalListContent}
            />
          </View>
        </View>
      );
    }
  };

  const NearestCardItem = ({ item, isMenu }) => (
    <View style={styles.card1}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.title}> {item.name} </Text>
      {isMenu ? (
        <Text style={styles.price}> {item.price} </Text>
      ) : (
        <Text style={styles.time}> {item.time} </Text>
      )}
    </View>
  );
  const PopularCardItem = ({ item, isMenu }) => (
    <View style={styles.cardpoplar}>
      <Image source={item.img} style={styles.imagePopular} />
      <View style={styles.popularDetails}>
        <Text style={styles.titlePopular}>{item.name}</Text>
        {isMenu && item.hotelname && (
          <Text style={styles.hotelNamePopular}>{item.hotelname}</Text>
        )}
      </View>
      {isMenu && <Text style={styles.pricePopular}>{item.price}</Text>}
    </View>
  );

  return (
    <FlatList
      data={combinedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ListHeaderComponent={
        <>
          <Header />
          <SearchBar />
          <Banner />
        </>
      }
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#09051C",
  },
  viewMore: {
    fontSize: 14,
    color: "#FF7C32",
  },
  horizontalListContent: {
    paddingRight: 16,
  },
  verticalListContent: {
    paddingBottom: 12,
  },
  row: {
    justifyContent: "space-between",
  },
  card1: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginRight: 12,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
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
  image: {
    width: 100,
    height: 60,
    resizeMode: "contain",
    marginBottom: 8,
  },
  imagePopular: {
    width: 64,
    height: 64,
    resizeMode: "cover",
    borderRadius: 12,
    marginRight: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#09051C",
    textAlign: "center",
  },
  titlePopular: {
    fontSize: 16,
    fontWeight: "900",
    color: "#09051C",
    textAlign: "center",
  },
  time: {
    fontSize: 12,
    color: "#3B3B3B",
    marginTop: 4,
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

export default HomeScreen;
