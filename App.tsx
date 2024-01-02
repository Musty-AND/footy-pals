import { StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { MatchProvider } from "./src/context/MatchContext";

export default function App() {
  return (
    <MatchProvider>
      <Tabs />
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
