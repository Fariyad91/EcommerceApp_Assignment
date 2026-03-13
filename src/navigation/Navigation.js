import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Feather";

import ProductList from "../screens/ProductList";
import ProductDetail from "../screens/ProductDetail";
import Cart from "../screens/Cart";
import Splash from "../screens/Splash"; 
import { CartContext } from "../context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProductList}  options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={ProductDetail} />
  </Stack.Navigator>
);

const MainTabs = () => {
  const { cart } = useContext(CartContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";

          if (route.name === "Home") iconName = "home";
          if (route.name === "Cart") iconName = "shopping-cart";

          return <Icon name={iconName} size={22} color={color} />;
        },
        tabBarBadge:
          route.name === "Cart" && cart.length > 0 ? cart.length : undefined,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}  />
      <Tab.Screen name="Cart" component={Cart}  />
    </Tab.Navigator>
  );
};

const Navigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="MainTabs" component={MainTabs} />
  </Stack.Navigator>
);

export default Navigation;