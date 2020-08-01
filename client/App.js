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

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const [query, setQuery] = useState("");
  const [definitionData, setDefinitionData] = useState({});
  console.log("query is: ", query);

  // const storeDefinition = async (value) => {
  //   console.log('storing def')
  //   try {
  //     await AsyncStorage.getItem('savedDefinitions', (err, result) => {
  //       console.log('getting definitions')
  //       var newDefiniton = {word: value.word, definition: value.definitions[0].definition}
  //       if (result !== null) {
  //         console.log('adding to list of definitions')
  //         var newDefinitons = JSON.parse(result).concat(newDefiniton);
  //         await AsyncStorage.setItem('savedDefinitions', JSON.stringify(newDefinitons));
  //         console.log(newDefinitons)
  //       } else {
  //         console.log('creating new list of definitons')
  //         await AsyncStorage.setItem('savedDefinitions', JSON.stringify([newDefiniton]));
  //         console.log(newDefiniton)
  //       }
  //     });
  //   } catch (e) {
  //     console.log("error storing definition")
  //     console.log(e)
  //   }
  // }

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
          //storeDefinition(json);
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
      <View style={styles.OuterContainer}>
        <ScrollView>
          <Title title={"Recollection"} />
          <SearchBar setQuery={setQuery} />
          <Definition definitionData={definitionData} />
          <Subtitle subtitle={"Recently Searched"} />
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
