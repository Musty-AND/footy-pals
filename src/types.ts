import { Dispatch, SetStateAction } from "react";

export type Match = {
  location: string;
  placeName: string;
  time: string;
  price: number;
  eachSide: 5 | 6 | 7;
  numberOfPlayers: number;
  meetingPoint?: string;
  rules?: string;
};

export type MatchContextType = {
  matches: Match[];
  setMatches: Dispatch<SetStateAction<Match[]>>;
};
