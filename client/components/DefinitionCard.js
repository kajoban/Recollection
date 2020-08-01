import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Definition({ definition }) {
  let parsedExample;
  try {
    parsedExample = definition.example.replace("<b>", "").replace("</b>", "");
  } catch {
    parsedExample = null;
  }

  return (
    <View style={styles.definitionCardContainer}>
      <Text style={styles.definitionType}>{definition.type}</Text>
      <Text style={styles.definitionContent}>{definition.definition}</Text>
      {parsedExample ? (
        <Text style={styles.definitionExample}>{parsedExample}</Text>
      ) : null}
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
