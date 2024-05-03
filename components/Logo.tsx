import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <View>
      <Image source={require("../assets/logo.png")} style={style.image} />
    </View>
  );
}
const style = StyleSheet.create({
  image: {
    width: 300,
    height: 250,
    alignItems: "center",
    marginBottom: 50,
    marginTop: 50,
  },
});
