import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import MovieCard from "../../MovieCard";

export default function HomePage() {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    movieSection: {
      padding: 6,
      title: {
        color: "#ffffff",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 22,
      },
      horizontalView: {
        marginHorizontal: 8,
      },
    },
  });

  const [getPopularMovies, setGetPopularMovies] = useState();

  function _getPopularMoviesFromApı() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=9f2d1368e54e609b6d793560018b878a&language=en-US&page=1`
    )
      .then((data) => data.json())
      .then((data) => {
        setGetPopularMovies(data.results);
      });
  }
  _getPopularMoviesFromApı();

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
            {getPopularMovies?.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  movieID={movie.id}
                  title={movie.original_title}
                  imgUrl={movie.poster_path}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
