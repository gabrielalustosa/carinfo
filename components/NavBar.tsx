import { View, Text, StyleSheet, Image } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { connectActionSheet } from "@expo/react-native-action-sheet";
import Options from "./Options";

function NavBar() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          headerLeft: () => (
            <Image style={style.image} source={require("../assets/logo.png")} />
          ),
          headerTitle: () => "",
          headerRight: () => <Options />,
        }}
      ></Stack>
    </ActionSheetProvider>
  );
}
const ConnectedApp = connectActionSheet(NavBar);
export default ConnectedApp;

const style = StyleSheet.create({
  image: {
    width: 40,
    height: 35,
    marginLeft: 10,
  },
});
