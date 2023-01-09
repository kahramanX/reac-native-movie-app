import { View, Text, StyleSheet } from "react-native";
import React from "react";

function Footer() {
  const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 15,
      display: "flex",
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#db0000",
      borderWidth: 1,
      padding: 10,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Home</Text>
      <Text style={styles.headerTitle}>Favs</Text>
    </View>
  );
}

export default Footer;
