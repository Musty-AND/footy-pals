import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MatchCard from "../components/Match";
import { useMatchContext } from "../context/MatchContext";
import Calendar from "../components/Calendar";
import Modal from "../components/Modal";
import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import { DateType } from "react-native-ui-datepicker";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const { matches } = useMatchContext();
  const [date, setDate] = useState<DateType>();
  const [open, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState("");

  const filteredChoice = date
    ? matches.filter((match) => match.date === dayjs(date).format("YYYY-MM-DD"))
    : matches;

  console.log("Filtered Choices", filteredChoice);

  const newMatches = filteredChoice.filter((newMatch) =>
    newMatch.location.includes(content)
  );

  console.log("newMatches", newMatches);

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.headingContainer}>
          <Text
            style={{
              ...styles.title,
              textAlign: "left",
            }}
          >
            Upcoming Matches
          </Text>
        </View>
        <Modal
          heading="Choose Date"
          buttonText="Close Calendar"
          button={<Feather name="calendar" size={24} color="black" />}
          open={open}
          setOpen={setOpen}
        >
          <Calendar
            value={date}
            // same thing as lines 46-48
            // setValue={setValue}
            setValue={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </Modal>
      </View>
      <SearchBar content={content} setContent={setContent} />
      {!newMatches.length ? (
        <Text style={styles.title}>No matches found</Text>
      ) : (
        <FlatList
          data={newMatches}
          renderItem={({ item }) => {
            return <MatchCard {...item} />;
          }}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  modalContainer: {
    display: "flex",
    flexDirection: "row",
  },

  headingContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
