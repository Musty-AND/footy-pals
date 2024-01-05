import React, { Dispatch, SetStateAction } from "react";

export type User = {
  name?: string;
  username: string;
  email?: string;
  contactNumber: string;
};

export type Match = {
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
};

export type MatchContextType = {
  matches: Match[];
  setMatches: Dispatch<SetStateAction<Match[]>>;
};

export type Modal = {
  heading: string;
  buttonText: string;
  children: React.ReactNode | React.ReactNode[];
  button: React.ReactNode;
  triggerClose?: boolean;
  open: boolean;
  setOpen: (val: boolean) => void;
};
