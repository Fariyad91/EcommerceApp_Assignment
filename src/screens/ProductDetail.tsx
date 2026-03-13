import React, { useContext } from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { CartContext } from "../context/CartContext";

const { width } = Dimensions.get("window");
const IMAGE_HEIGHT = 300;

const ProductDetail = ({ route }: any) => {
  const { item } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐⭐⭐⭐⭐ ({item.rating.rate}/5)</Text>
            <Text style={styles.reviews}>{item.rating.count} reviews</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    paddingBottom: 120, // Bottom button ke liye space
  },
  image: {
    width: width,
    height: IMAGE_HEIGHT,
    resizeMode: "cover",
  },
  detailsContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Image ke saath overlap for card effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#10b981",
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  reviews: {
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#3b82f6",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

export default ProductDetail;
