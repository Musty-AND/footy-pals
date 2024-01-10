import { Feather } from '@expo/vector-icons';
import { SizeTokens, Text } from 'tamagui';

import { MatchCreator, MatchInfo, Tile } from './TileBuilder';
import { User } from '../../types';

type TileProps = {
  location: string;
  placeName: string;
  date: string;
  time: string;
  price: number;
  organiser: User;
  eachSide: 5 | 6 | 7;
  numberOfPlayers: number;
  meetingPoint?: string;
  rules?: string;
  id: number;
  size?: SizeTokens;
  onPress?: () => void;
};

const MatchTile = ({
  placeName,
  location,
  numberOfPlayers,
  eachSide,
  organiser,
  price,
  size = '$md',
  onPress,
}: TileProps) => {
  return (
    <Tile size={size} onPress={onPress}>
      <MatchInfo>
        <Tile.Text fontWeight="bold">
          {placeName}, {location}
        </Tile.Text>
        <Tile.Text>£{price.toFixed(2)}</Tile.Text>
      </MatchInfo>
      <Tile.HR />
      <MatchInfo>
        <MatchCreator>
          <Tile.Icon>
            <Feather name="user" />
          </Tile.Icon>
          <Tile.Text>
            {eachSide} a side by @{organiser?.username}
          </Tile.Text>
        </MatchCreator>
        <Tile.Numbers>
          <Text color="$color">
            {numberOfPlayers}/{eachSide * 2}
          </Text>
        </Tile.Numbers>
      </MatchInfo>
    </Tile>
  );
};

export default MatchTile;
