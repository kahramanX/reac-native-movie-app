import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function Footer() {
  const navigation = useNavigation();

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
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={styles.headerTitle}>Home</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          // navigation.navigate("FavoritesScreen");
        }}
      >
        <Text style={styles.headerTitle}>Favs</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Footer;
