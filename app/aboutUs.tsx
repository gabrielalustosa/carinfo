import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function aboutUs() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Developed by:</Text>
      <Image source={require("../assets/last.png")} style={styles.lastImage} />
      <Text style={styles.text}> Version 1.0</Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://github.com/gabrielalustosa/carinfo.git")
        }
        testID="github-link"
      >
        <Text style={[styles.text, styles.link]}>
          https://github.com/gabrielalustosa/carinfo.git
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  lastImage: {
    width: 400,
    height: 380,
    alignItems: "center",
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
