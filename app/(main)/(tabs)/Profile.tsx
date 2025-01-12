import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const userData = {
    name: "Anam Wusono",
    email: "anamwp66@gmail.com",
    membership: "Member Gold",
    vouchers: 3,
    favorite: {
      name: "Spacy fresh crab",
      restaurant: "Waroenk kita",
      price: "$35",
      image: "https://via.placeholder.com/150", // Replace with real image URL
    },
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://via.placeholder.com/300", // Replace with user's image
          }}
          style={styles.profileImage}
        />
      </View>

      {/* User Info Section */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.membershipBadge}>{userData.membership}</Text>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userEmail}>{userData.email}</Text>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="create-outline" size={20} color="#53E88B" />
        </TouchableOpacity>
      </View>

      {/* Voucher Section */}
      <View style={styles.voucherCard}>
        <Ionicons
          name="pricetag-outline"
          size={24}
          color="#FFB800"
          style={styles.voucherIcon}
        />
        <Text style={styles.voucherText}>
          You Have {userData.vouchers} Voucher
        </Text>
      </View>

      {/* Favorite Section */}
      <Text style={styles.sectionTitle}>Favorite</Text>
      <View style={styles.favoriteCard}>
        <Image
          source={{
            uri: userData.favorite.image,
          }}
          style={styles.favoriteImage}
        />
        <View style={styles.favoriteDetails}>
          <Text style={styles.favoriteName}>{userData.favorite.name}</Text>
          <Text style={styles.favoriteRestaurant}>
            {userData.favorite.restaurant}
          </Text>
          <Text style={styles.favoritePrice}>{userData.favorite.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyAgainButton}>
          <Text style={styles.buyAgainText}>Buy Again</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#53E88B" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#53E88B" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart" size={24} color="#53E88B" />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-ellipses" size={24} color="#53E88B" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    height: 250,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: -40,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  membershipBadge: {
    backgroundColor: "#FFB800",
    color: "#ffffff",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 12,
  },
  userDetails: {
    marginTop: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  userEmail: {
    fontSize: 14,
    color: "#888888",
  },
  editIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  voucherCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  voucherIcon: {
    marginRight: 10,
  },
  voucherText: {
    fontSize: 14,
    color: "#333333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginHorizontal: 20,
    marginTop: 30,
  },
  favoriteCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  favoriteImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  favoriteDetails: {
    flex: 1,
    marginLeft: 10,
  },
  favoriteName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  favoriteRestaurant: {
    fontSize: 14,
    color: "#888888",
  },
  favoritePrice: {
    fontSize: 14,
    color: "#53E88B",
    fontWeight: "bold",
  },
  buyAgainButton: {
    backgroundColor: "#53E88B",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  buyAgainText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#333333",
  },
});

export default ProfileScreen;
