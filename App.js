import { StatusBar } from "expo-status-bar";
import {
  Box,
} from "@react-native-material/core";
import { CurrentExercise } from "./components/current-exercise";

export default function App() {
  return (
    <>
      <Box p={8} mt={20} mb={10}>
        <CurrentExercise />
        <StatusBar style="auto" />
      </Box>
    </>
  );
}
