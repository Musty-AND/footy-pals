import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Match } from "../types";

const MatchCard = ({ location, time, numberOfPlayers }: Match) => {
  return (
    <View>
      <Text>{location}</Text>
      <Text>{time}</Text>
      <Text>{numberOfPlayers}</Text>
    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({});
