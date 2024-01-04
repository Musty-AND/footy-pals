import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Match } from "../types";
import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";

const MatchCard = ({
  placeName,
  location,
  date,
  time,
  eachSide,
  price,
  numberOfPlayers,
  organiser,
  ...rest
}: Match) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {placeName}, {location}
      </Text>
      <Text>
        Time: {dayjs(date).format("ddd D MMM YYYY")} {time}
      </Text>
      <View style={styles.playerContainers}>
        <View style={styles.matchInfoContainer}>
          <Feather name="user" size={24} color="black" />
          <Text>
            {eachSide} a side by @{organiser?.username}
          </Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={{ color: "#3f16b0" }}>
            {numberOfPlayers}/{eachSide * 2}
          </Text>
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.priceContainer}>
        <Text>£{price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    gap: 6,
  },
  playerContainers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  numbersContainer: {
    backgroundColor: "#d2c4d5",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  matchInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  priceContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  title: { fontSize: 18, fontWeight: "bold" },
  hr: { flex: 1, height: 1, backgroundColor: "#edf0f3" },
});
