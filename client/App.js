import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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

  const [query, setQuery] = useState("");
  const [definitionData, setDefinitionData] = useState({});
  console.log("query is: ", query);

  useEffect(() => {
    if (query) {
      fetch(`https://owlbot.info/api/v4/dictionary/${query}`, {
        method: "GET",
        headers: {
          Authorization: "Token b8dfa09b46183472d87f88183aee80d3aa13b07d",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setDefinitionData(json);
        })
        .catch((error) => console.log(error));
    }
  }, [query]);

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
        <SearchBar setQuery={setQuery} />
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
    marginHorizontal: 20,
  },
});
