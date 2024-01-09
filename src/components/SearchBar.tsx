import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Stack, styled, Input } from 'tamagui';

import Icon from './Icon';

export const SearchBarContainer = styled(Stack, {
  backgroundColor: '$background',
  borderColor: '$color',
  alignItems: 'center',
  flexDirection: 'row',
  flex: 1,
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 10,

  focusStyle: {
    borderWidth: 2,
  },
});

type SearchBarProps = {
  content: string;
  setContent: (value: string) => void;
};
const SearchBar = ({ content, setContent }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <Icon icon={<Feather name="search" size={24} />} />
      <Input
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
        placeholder="London"
        autoCorrect={false}
        autoCapitalize="none"
        color="$color"
        fontFamily="$body"
        borderColor="$color"
        borderWidth={0}
        paddingLeft={10}
        paddingRight={20}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
