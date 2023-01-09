import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function Footer() {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    footerContainer: {
      borderTopWidth: 1,
      borderTopColor: "#db0000",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 15,
      display: "flex",
    },
    footerTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#db0000",
      borderWidth: 1,
      padding: 10,
    },
  });

  return (
    <View style={styles.footerContainer}>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={styles.footerTitle}>Home</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      >
        <Text style={styles.footerTitle}>Search</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("FavoritesScreen");
        }}
      >
        <Text style={styles.footerTitle}>Favs</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Footer;
