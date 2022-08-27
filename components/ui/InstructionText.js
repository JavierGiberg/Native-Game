import { Text, StyleSheet } from "react-native";
import Colors from "../../.expo-shared/screens/constants/colors";
function InstructionText({ children, style }) {
  return <Text style={[styles.instrucionText, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  instrucionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
