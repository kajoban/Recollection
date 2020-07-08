import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View contentContainerStyle={{ alignItems: "left" }}>
      <Text style={styles.title}>Recollection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
