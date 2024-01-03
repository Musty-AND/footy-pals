import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

type SearchBarProps = {
  content: string;
  setContent: (value: string) => void;
};
const SearchBar = ({ content, setContent }: SearchBarProps) => {
  // no ts error here because type is implied  by the "" I have entered below

  console.log(content);
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={24} color="black" />
      <TextInput
        value={content}
        style={styles.input}
        onChangeText={(text) => {
          setContent(text);
        }}
        placeholder="London"
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
  },
});
