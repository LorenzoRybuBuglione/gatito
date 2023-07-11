import React from "react";
import { TextInput } from "react-native";
import stylesDefault from "./styles";

export default function NumberInput({ value, action, styles}) {
  const update = (newValue, actionReturn) => {
    const integerVerify = newValue.match(/^[0-9]*$/);
    if (!integerVerify) return;

    const removeLeftZero = newValue.replace(/^(0)(.+)/, "$2");
    actionReturn(removeLeftZero);
  };
  const numberString = String(value);
  return (
    <TextInput
      style={[stylesDefault.field, styles]}
      keyboardType="number-pad"
      selectTextOnFocus
      value={numberString}
      onChangeText={(newValue) => {
        update(newValue, action);
      }}
    />
  );
}
