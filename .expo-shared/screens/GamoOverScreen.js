import { View, Image, StyleSheet } from "react-native";

import Title from "../../components/ui/Title";
import Colors from "./constants/colors";

function GameOverScreen() {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={require("../")} /> */}
      </View>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
