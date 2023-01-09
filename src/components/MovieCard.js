import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";

export default function MovieCard({ title, imgUrl, movieID }) {
  const styles = StyleSheet.create({
    container: {
      padding: 4,
      borderWidth: 1,
      borderColor: "#ffff",
      width: 160,
      marginHorizontal: 8,
    },
    image: { resizeMode: "cover" },
    text: {
      color: "#ffffff",
      fontWeight: "400",
      width: 140,
      marginTop: 4,
    },
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`,
          width: "100%",
          height: 200,
        }}
      />
      <Text numberOfLines={2} style={styles.text}>
        MOVİE TITL dsad sads dsad s aasE LAN
      </Text>
    </View>
  );
}
