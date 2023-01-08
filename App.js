import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to shhtart working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput placeholder="useless placeholder" />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>

      <TextInput label="Email" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
