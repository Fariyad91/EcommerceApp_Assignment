import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => (
  <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Image 
        source={require("../assets/icons/sofrikservices_logo.jpeg")} 
        style={styles.logo} 
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.brandName}>SOFRik</Text>
      <Text style={styles.tagline}>Premium Shopping</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#bad5efff",
  },
  logoContainer: {
    marginRight: 16,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  brandName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1e293b",
    // letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 14,
    color: "#64748b",
    fontWeight: "600",
    marginTop: 2,
  },
});

export default Header;
