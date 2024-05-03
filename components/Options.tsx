import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router, useRouter, usePathname } from "expo-router";
import aboutUs from "../app/aboutUs";
import { Feather } from "@expo/vector-icons";

export default function Options() {
  const { showActionSheetWithOptions } = useActionSheet();
  const route = useRouter();

  const pathname = usePathname();

  const destructiveButtonIndex = 0;
  let options = ["Logout", "About Us"];
  if (pathname == "/aboutUs") {
    options = ["Logout"];
  }

  console.log(pathname);

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          showActionSheetWithOptions(
            {
              options,
              destructiveButtonIndex,
            },
            (buttonIndex) => {
              console.log(buttonIndex);
              switch (buttonIndex) {
                case 0:
                  router.dismissAll();
                  break;
                case 1:
                  router.push("/aboutUs");
                  break;
              }
            }
          )
        }
      >
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
