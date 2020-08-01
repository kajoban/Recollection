import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/dev";
import AsyncStorage from "@react-native-community/async-storage";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import SearchBar from "./components/SearchBar";
import Definition from "./components/Definition";
import RecentlySearchedList from "./components/RecentlySearchedList";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const [query, setQuery] = useState("");
  const [definitionData, setDefinitionData] = useState({});
  const [definitionList, setDefinitionList] = useState([]);

  storeDefinition = async (definitionToSave) => {
    //await AsyncStorage.removeItem("SDEF");
    try {
      let definitionArray = [];
      let storedDefinitions = await AsyncStorage.getItem("SDEF");
      if (storedDefinitions !== null) {
        definitionArray = JSON.parse(storedDefinitions);
        definitionArray.forEach((definition) => {
          if (definition.word === definitionToSave.word) {
            throw "Already searched";
          }
        });
      }
      definitionArray.push(definitionToSave);
      await AsyncStorage.setItem("SDEF", JSON.stringify(definitionArray));
      getDefinitions();
    } catch (error) {
      console.log(error);
    }
  };

  getDefinitions = async () => {
    let storedDefinitions = await AsyncStorage.getItem("SDEF");
    setDefinitionList(JSON.parse(storedDefinitions));
  };

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
          storeDefinition(json);
        })
        .catch((error) => console.log(error));
    }
  }, [query]);

  useEffect(() => {
    getDefinitions();
  }, []);

  if (!fontsLoaded) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.OuterContainer}>
        <ScrollView>
          <Title title={"Recollection"} />
          <SearchBar setQuery={setQuery} />
          <Definition definitionData={definitionData} />
          <Subtitle subtitle={"Recently Searched"} />
          <RecentlySearchedList definitions={definitionList} />
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
