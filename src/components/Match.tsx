import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Match } from "../types";

const MatchCard = ({ location, date, numberOfPlayers, ...rest }: Match) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{location}</Text>
      <Text>Date: {date}</Text>
      <Text>Number of players currently: {numberOfPlayers}</Text>
    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: { fontSize: 18, fontWeight: "bold" },
});
