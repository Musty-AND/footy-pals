import React from "react";
import { View, Text, FlatList } from "react-native";
import MatchCard from "../components/Match";
import { useMatchContext } from "../context/MatchContext";

const HomeScreen = () => {
  const { matches } = useMatchContext();

  return (
    <View>
      <Text>Home Screen</Text>
      <FlatList
        horizontal={true}
        data={matches}
        renderItem={({ item }) => {
          return (
            <MatchCard
              location={item.location}
              time={item.time}
              numberOfPlayers={item.numberOfPlayers}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
