import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import imagebutton from "../assets/imagebutton.png";
import { useRouter } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleGoToMain = () => {
    if (password == "123" && username == "teste") router.push("/main");
  };

  return (
    <View>
      <TextInput
        value={username}
        style={style.textbox}
        placeholder="Username"
        placeholderTextColor={"#c8c8c8"}
        onChangeText={setUsername}
      ></TextInput>
      <TextInput
        value={password}
        style={style.textbox}
        placeholder="Password"
        placeholderTextColor={"#c8c8c8"}
        secureTextEntry
        onChangeText={setPassword}
      ></TextInput>
      <TouchableOpacity style={style.button} onPress={handleGoToMain}>
        <Image
          source={require("../assets/imagebutton.png")}
          style={style.button}
        />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  button: {
    width: 600,
    height: 150,
    alignItems: "center",
    marginBottom: 50,
  },
  textbox: {
    borderColor: "#c8c8c8",
    borderWidth: 2,
    width: 400,
    height: 40,
    marginBottom: 40,
    borderRadius: 8,
    alignSelf: "center",
  },
});
