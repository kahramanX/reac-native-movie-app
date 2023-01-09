import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MovieCard from "../../MovieCard";
import Carousel from "react-native-reanimated-carousel";

export default function HomePage() {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    movieSection: {
      borderBottomWidth: 1,
      borderBottomColor: "#831010",
      padding: 6,
      title: {
        color: "#ffffff",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 12,
      },
    },
  });

  return (
    <View style={{ backgroundColor: "#000000", height: "100%" }}>
      <View style={styles.movieSection}>
        <Text style={styles.movieSection.title}>Popular Movies</Text>
        <View>
          <MovieCard movieID={"2222"} title={"Movie Title"} imgUrl={"333"} />
        </View>
      </View>
    </View>
  );
}
