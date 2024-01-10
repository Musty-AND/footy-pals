import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { DateType } from 'react-native-ui-datepicker';
import { Stack, Text } from 'tamagui';

import Button from '../components/Button';
import Calendar from '../components/Calendar';
import Icon from '../components/Icon';
import MatchTile from '../components/MatchTile';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';
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
    <Stack backgroundColor="$background" paddingHorizontal="$sm" flex={1}>
      <Stack
        flexDirection="row"
        marginBottom={10}
        alignItems="center"
        justifyContent="space-between">
        <Text
          style={{
            ...styles.title,
            textAlign: 'left',
          }}>
          Upcoming Matches
        </Text>
        <Modal
          heading="Choose Date"
          buttonText="Close Calendar"
          button={<Icon icon={<Feather name="calendar" />} />}
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
      </Stack>
      <Stack flexDirection="row" alignItems="center" justifyContent="center" gap={5}>
        <SearchBar content={location} setContent={setLocation} />
        <Button
          text="Reset"
          onPress={() => resetSearch()}
          size="$md"
          rightIcon={<Feather name="rotate-ccw" />}
        />
      </Stack>
      {!filteredMatches.length ? (
        <Text style={styles.title}>No matches found</Text>
      ) : (
        <FlatList
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
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
    </Stack>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: 15,
    padding: 1,
  },
  itemContainer: {
    gap: 15,
    paddingBottom: 15,
  },
});
