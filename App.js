import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./src/components/layouts/Header";
import Footer from "./src/components/layouts/Footer";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/components/screens/homeScreen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
  });

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home Screen" }}
          />
          {/* <Stack.Screen
            name="favorites"
            component={HomeScreen}
            options={{ title: "My Favorites" }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Movie" }}
          /> */}
        </Stack.Navigator>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}
