import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
} from "react-native";
import React from "react";

export default function MovieCard({ title, imgUrl, movieID }) {
  const styles = StyleSheet.create({
    container: {
      padding: 4,
      borderWidth: 1,
      borderColor: "#ffff",
      width: 160,
      marginHorizontal: 8,
      borderRadius: 4,
    },
    image: { resizeMode: "cover" },
    text: {
      color: "#ffffff",
      fontWeight: "500",
      width: 140,
      marginTop: 4,
    },
    button: {
      backgroundColor: "#db0000",
      color: "#fffff",
      width: "100%",
      padding: 8,
      borderRadius: 4,
      marginTop: 8,
      alignItems: "center",
    },
    buttonText: {
      fontWeight: "800",
      color: "#ffffff",
    },
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${imgUrl}`,
          width: "100%",
          height: 200,
        }}
      />
      <Text numberOfLines={2} style={styles.text}>
        {title}
      </Text>

      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          Alert.alert(
            "Do you want add to your favorites?",
            `Movie ID: ${movieID}`,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]
          );
        }}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
}
