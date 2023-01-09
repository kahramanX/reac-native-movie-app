import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import MovieCard from "../../MovieCard";

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
      horizontalView: {
        marginHorizontal: 8,
      },
    },
  });

  return (
    <ScrollView style={{ backgroundColor: "#000000", height: "100%" }}>
      <View style={styles.movieSection}>
        <Text style={styles.movieSection.title}>Popular Movies</Text>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.movieSection.horizontalView}
          >
            <MovieCard movieID={"2222"} title={"Movie Title"} imgUrl={"333"} />
            <MovieCard movieID={"2222"} title={"Movie Title"} imgUrl={"333"} />
            <MovieCard movieID={"2222"} title={"Movie Title"} imgUrl={"333"} />
            <MovieCard movieID={"2222"} title={"Movie Title"} imgUrl={"333"} />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
