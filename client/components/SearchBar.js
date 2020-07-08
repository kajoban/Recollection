import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function SearchBar(props) {
  const [value, onSubmitEditing] = useState();

  useEffect(() => {
    props.setQuery(value);
  }, [value]);

  return (
    <View>
      <TextInput
        style={styles.searchBar}
        onSubmitEditing={(text) => onSubmitEditing(text.nativeEvent.text)}
        placeholder="Search"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchBar: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    textAlign: "left",
    height: 50,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    borderRadius: 15,
    backgroundColor: "#EEEEEE",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
