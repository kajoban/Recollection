import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Subtitle(props) {
  return (
    <View contentContainerStyle={{ alignItems: "left" }}>
      <Text style={styles.title}>{props.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
