import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DefinitionCard from "./DefinitionCard";

export default function Definition() {
  return (
    <View style={styles.definitionContainer}>
      <View style={styles.TitleRow}>
        <Text style={styles.definitionTitle}>Bark</Text>
        <Text style={styles.definitionPronouce}>/bärk/</Text>
      </View>
      <View>
        <DefinitionCard />
        <DefinitionCard />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  definitionTitle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
  },
  definitionPronouce: {
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
    paddingLeft: 15,
    color: "#737373",
  },
  definitionContainer: {
    marginVertical: 15,
    height: "auto",
    width: "auto",
    borderWidth: 2,
    borderColor: "#C4C4C4",
    borderRadius: 15,
    padding: 15,
  },
  TitleRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0,
  },
});
