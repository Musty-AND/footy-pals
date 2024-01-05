import { StyleSheet } from "react-native";
import Navigation from "./src/components/Navigation";
import { MatchProvider } from "./src/context/MatchContext";

export default function App() {
  return (
    <MatchProvider>
      <Navigation />
    </MatchProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
