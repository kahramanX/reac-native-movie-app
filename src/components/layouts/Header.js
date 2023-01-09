import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  headerContainer: {
    //backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    display: "flex",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#db0000",
  },
});

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>My Movies</Text>
      <Text style={styles.headerTitle}>Favs</Text>
    </View>
  );
}

export default Header;
