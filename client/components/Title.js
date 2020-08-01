import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Title(props) {
  return (
    <View contentContainerStyle={{ alignItems: "left" }}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
