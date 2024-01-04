import React, { useMemo, useState } from "react";
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
  const [location, setLocation] = useState("");

  const filteredMatches = useMemo(() => {
    return matches.filter((match) => {
      if (location && date)
        return (
          match.location.toLowerCase().includes(location.toLowerCase()) &&
          match.date === dayjs(date).format("YYYY-MM-DD")
        );

      if (location)
        return match.location.toLowerCase().includes(location.toLowerCase());

      if (date) return match.date === dayjs(date).format("YYYY-MM-DD");

      return true;
    });
  }, [matches, date, location]);

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
      <SearchBar content={location} setContent={setLocation} />
      {!filteredMatches.length ? (
        <Text style={styles.title}>No matches found</Text>
      ) : (
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.itemContainer}
          data={filteredMatches}
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
    margin: 10,
  },
  modalContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
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
  listContainer: {
    marginVertical: 15,
  },
  itemContainer: {
    gap: 15,
    paddingBottom: 15,
  },
});
