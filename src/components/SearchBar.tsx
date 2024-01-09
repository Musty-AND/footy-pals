import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type SearchBarProps = {
  content: string;
  setContent: (value: string) => void;
};
const SearchBar = ({ content, setContent }: SearchBarProps) => {
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
    marginTop: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
  },
});
