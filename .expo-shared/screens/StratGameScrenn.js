import { useState } from "react";
import { TextInput, StyleSheet, View, Alert } from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";
import Colors from "./constants/colors";
import Card from "../../components/ui/Card";
import InstructionText from "../../components/ui/InstructionText";

function StartGamescreen(onPickNumber) {
  const [enterNumber, setEnterNubber] = useState("");

  function numberInputHandler(enterText) {
    setEnterNubber(enterText);
  }
  function resetInputHandler() {
    setEnterNubber("");
  }
  function confirmInputHandler() {
    const choseNumber = parseInt(enterNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Nubmer has be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber.onPickNumber(choseNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          value={enterNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGamescreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
