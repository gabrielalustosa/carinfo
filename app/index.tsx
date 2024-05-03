import { StyleSheet, Text, TextInput, View } from "react-native";
import logo from "../assets/logo.png";
import Login from "../components/Login";
import Logo from "../components/Logo";
import { Stack } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Logo></Logo>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
