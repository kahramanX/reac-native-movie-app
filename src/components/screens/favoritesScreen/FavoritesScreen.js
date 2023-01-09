import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function FavoritesScreen() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000000",
      height: "100%",
    },
    title: {
      color: "#ffffff",
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 22,
      textAlign: "center",
      paddingTop: 28,
    },
    input: {
      borderWidth: 1,
      borderRadius: 4,
      backgroundColor: "#ffffff",
      padding: 14,
      marginBottom: 28,
    },
  });
  return (
    <View>
      <Text>FavoriteScreen</Text>
    </View>
  );
}
