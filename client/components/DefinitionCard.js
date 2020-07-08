import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Definition() {
  return (
    <View style={styles.definitionCardContainer}>
      <Text style={styles.definitionType}>noun</Text>
      <Text style={styles.definitionContent}>
        the sharp explosive cry of a dog, fox, or seal.
      </Text>
      <Text style={styles.definitionExample}>"the bark of a dog"</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  definitionCardContainer: {
    marginVertical: 5,
  },
  definitionType: {
    fontStyle: "italic",
  },
  definitionContent: {},
  definitionExample: {
    fontStyle: "italic",
    color: "#737373",
  },
});
