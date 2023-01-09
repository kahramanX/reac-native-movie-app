import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import MovieCard from "../../MovieCard";

export default function SearchScreen() {
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
  const [movieQuery, setMovieQuery] = useState("");
  const [getSearchedMovies, setGetSearchedMovies] = useState();

  const _getSearchedMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9f2d1368e54e609b6d793560018b878a&query=${movieQuery}&page=1`
    )
      .then((data) => data.json())
      .then((data) => {
        setGetSearchedMovies(data.results);
      });
  };

  useEffect(() => {
    _getSearchedMovies();
  }, [movieQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Search Movies</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={setMovieQuery}
        value={movieQuery}
      />
      <FlatList
        data={getSearchedMovies}
        renderItem={({ item }) => {
          return (
            <MovieCard
              movieID={item.id}
              title={item.original_title}
              imgUrl={item.poster_path}
            />
          );
        }}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
