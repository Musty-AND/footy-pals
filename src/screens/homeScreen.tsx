import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { DateType } from 'react-native-ui-datepicker';

import Button from '../components/Button';
import Calendar from '../components/Calendar';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';
import MatchTile from '../components/Tile';
import { useMatchContext } from '../context/MatchContext';

const HomeScreen = ({ navigation }: any) => {
  const { matches } = useMatchContext();
  const [date, setDate] = useState<DateType>();
  const [open, setOpen] = useState<boolean>(false);
  const [location, setLocation] = useState('');

  const resetSearch = () => {
    setDate(null);
    setLocation('');
  };

  const filteredMatches = useMemo(() => {
    return matches.filter((match) => {
      if (location && date)
        return (
          match.location.toLowerCase().includes(location.toLowerCase()) &&
          match.date === dayjs(date).format('YYYY-MM-DD')
        );

      if (location) return match.location.toLowerCase().includes(location.toLowerCase());

      if (date) return match.date === dayjs(date).format('YYYY-MM-DD');

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
              textAlign: 'left',
            }}>
            Upcoming Matches
          </Text>
        </View>
        <Modal
          heading="Choose Date"
          buttonText="Close Calendar"
          button={<Feather name="calendar" size={24} color="black" />}
          open={open}
          setOpen={setOpen}>
          <Calendar
            value={date}
            // Line below is the same as the 2 lines below that are not commented out
            // setValue={setValue}
            setValue={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </Modal>
      </View>
      <Button
        text="Reset Search"
        onPress={() => resetSearch()}
        size="$md"
        rightIcon={<Feather name="airplay" />}
      />
      <SearchBar content={location} setContent={setLocation} />
      {!filteredMatches.length ? (
        <Text style={styles.title}>No matches found</Text>
      ) : (
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.itemContainer}
          data={filteredMatches}
          renderItem={({ item }) => {
            return (
              <MatchTile
                {...item}
                onPress={() => {
                  navigation.navigate({
                    name: 'Match Details',
                    params: { id: item.id },
                  });
                }}
              />
            );
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
    flex: 1,
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  headingContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: 15,
  },
  itemContainer: {
    gap: 15,
    paddingBottom: 15,
  },
});
