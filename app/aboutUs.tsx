import { View, Text, StyleSheet, Image } from "react-native";
import Logo from "../components/Logo";
import React from "react";
import last from "../assets/last.png";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function aboutUs() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Developed by:</Text>
      <Image source={require("../assets/last.png")} style={styles.lastImage} />
      <Text style={styles.text}> Version 1.0</Text>
      <Text style={styles.text}>
        github : https://github.com/gabrielalustosa/carinfo.git
      </Text>
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
    fontSize: 20,
    fontWeight: "bold",
  },
});
