import React from "react";
import { render } from "@testing-library/react-native";
import Login from "./Login";
import { Alert } from "react-native";

describe("Message", () => {
  it("Should display alert with 'Bem-Vindo!'", () => {
    jest.spyOn(Alert, "alert");
    render(<Login />);
    expect(Alert.alert).toHaveBeenCalledWith("Bem-Vindo!");
  });
});
