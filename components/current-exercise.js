import { StyleSheet, Text } from "react-native";
import {
  Button,
  HStack,
  Flex,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

export const CurrentExercise = () => {
    const [repetitions, setRepetitions] = useState(10)
    const [weight, setWeight] = useState(10)
    const exerciseName = 'Levantamento Terra'
    const goals = {
        repetition: 10,
        weight: 20
    }
    
    return (
        <Flex gap={8} style={{justifyContent: 'space-between', height: '100%'}}>
          <Flex
            p={8}
            gap={8}
            style={{ backgroundColor: "#ccc", borderRadius: 4 }}
          >
            <Text style={styles.title}>{exerciseName}</Text>
            <Text>Repetições</Text>
            <HStack
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              gap={8}
            >
              <IconButton onPress={() => setRepetitions(repetitions - 1)} icon={(props) => <Icon name="minus" {...props} />} />
              <Text>{repetitions} (Meta: {goals.repetition})</Text>
              <IconButton onPress={() => setRepetitions(repetitions + 1)} icon={(props) => <Icon name="plus" {...props} />} />
            </HStack>
            <Text>Peso</Text>
            <HStack
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              gap={8}
            >
              <IconButton onPress={() => setWeight(weight - 1)} icon={(props) => <Icon name="minus" {...props} />} />
              <Text>{weight}kg (Meta: {goals.weight}kg)</Text>
              <IconButton onPress={() => setWeight(weight + 1)} icon={(props) => <Icon name="plus" {...props} />} />
              {/* <Icon name="home" size={24} color="red"/> */}
            </HStack>
          </Flex>
          <Flex
            direction="row"
            justifyContent="space-between"
            style={{ gap: 8 }}
          >
            <Button title="Voltar" style={{ flex: 1 }} />
            <Button title="Próximo" style={{ flex: 1 }} />
          </Flex>
        </Flex>
    )
}


const styles = StyleSheet.create({
    title: {
      fontSize: 24,
    },
  });
  