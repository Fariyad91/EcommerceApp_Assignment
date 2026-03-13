import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MainTabs"); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../assets/icons/sofrikservices_logo.jpeg")} 
        style={{ width: 250, height: 250, marginBottom: 20 }}
      />
      
    </View>
  );
};

export default Splash;