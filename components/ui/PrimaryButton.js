import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../.expo-shared/screens/constants/colors";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }

  return (
    <View style={style.buttonOunerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.buttonOunerContainer, style.pressed]
            : style.container
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
const style = StyleSheet.create({
  buttonOunerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: Colors.primary500,

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
