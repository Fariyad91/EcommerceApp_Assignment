// ProductCard.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface ProductCardProps {
  item: any;
  onPress: () => void;
}

const ProductCard = ({ item, onPress }: ProductCardProps) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: item.image }} style={styles.image} />

    <View style={styles.info}>
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    elevation: 3
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 14,
    fontWeight: "600"
  },
  price: {
    fontSize: 13,
    marginTop: 4,
    color: "#444"
  }
});

export default ProductCard;