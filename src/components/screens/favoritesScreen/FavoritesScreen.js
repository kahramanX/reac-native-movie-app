import { View, Text, StyleSheet, SafeAreaView } from "react-native";
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
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Favorite Movies</Text>
      <Text style={{ color: "white" }}>test</Text>
    </SafeAreaView>
  );
}
