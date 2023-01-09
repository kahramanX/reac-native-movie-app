import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "./src/components/layouts/Footer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/components/screens/homeScreen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/components/screens/searchScreen/SearchScreen";
import FavoritesScreen from "./src/components/screens/favoritesScreen/FavoritesScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#000000",
    },
  });

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ title: "Search" }}
          />
          <Stack.Screen
            name="FavoritesScreen"
            component={FavoritesScreen}
            options={{ title: "My Favorites" }}
          />
        </Stack.Navigator>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}
