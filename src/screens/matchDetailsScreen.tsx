import React, { useContext } from 'react';
import { useMatchContext } from '../context/MatchContext';
import { View, Text, Button } from 'react-native';

const MatchDetailsScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  const { matches } = useMatchContext();

  const selectedMatch = matches.find((match) => match.id === id);

  console.log('bosh', selectedMatch);
  return (
    <View>
      <Text> Match Details</Text>
      <Text>{id}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MatchDetailsScreen;
