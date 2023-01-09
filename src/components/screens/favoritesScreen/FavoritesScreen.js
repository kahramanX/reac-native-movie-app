import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../MovieCard";

export default function FavoritesScreen() {
  const { movieIDStore } = useSelector((state) => state.actionSlice);
  const [getFavoritesMovie, setGetFavoritesMovie] = useState([]);

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

  const _getMoviesFromAPI = (idFromFavorites) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${idFromFavorites}?api_key=9f2d1368e54e609b6d793560018b878a&language=en-US`
    )
      .then((data) => data.json())
      .then((data) => {
        setGetFavoritesMovie((oldArray) => [...oldArray, data]);
      });
  };

  useEffect(() => {
    movieIDStore.forEach((movieID) => {
      _getMoviesFromAPI(movieID);
    });
    console.log(getFavoritesMovie);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Favorite Movies</Text>

      <FlatList
        data={getFavoritesMovie}
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
