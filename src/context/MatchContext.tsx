import React, { useContext, useState, useEffect } from "react";
import { MatchContextType, Match } from "../types";
import { mockMatches } from "../mocks/matches";
// import { useMatches } from "../hooks/useMatches";

const MatchContext = React.createContext({} as MatchContextType);

type props = any;

export const MatchProvider = ({ children }: props) => {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const returnedMatches = mockMatches;
      setMatches(returnedMatches);
    };

    if (!matches.length) fetchData();
  }, []);

  return (
    <MatchContext.Provider value={{ matches, setMatches }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatchContext = () => {
  const context = useContext(MatchContext);
  if (!context) throw new Error("Match context must be used within Provider");
  return context;
};
