import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/dev";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import Definition from "./components/Definition";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </ScrollView>
    );
  } else {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Title />
        <SearchBar />
        <Definition />
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 50,
    marginHorizontal: 30,
  },
});
