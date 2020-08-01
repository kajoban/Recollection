import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function RecentlySearched({ definition }) {
  return (
    <View style={styles.recentlySearchedContainer}>
      <Text>
        <Text style={styles.highlightText}>{definition.word}</Text>:{" "}
        {definition.definitions[0].definition}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  recentlySearchedContainer: {
    marginVertical: 5,
    height: "auto",
    width: "auto",
    borderWidth: 2,
    borderColor: "#C4C4C4",
    borderRadius: 15,
    padding: 10,
  },
  highlightText: {
    fontFamily: "Roboto_700Bold",
  },
});
