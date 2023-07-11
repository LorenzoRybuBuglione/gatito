import React from "react";
import { Text, TouchableOpacity } from "react-native";
import defaultStyles from "./styles";

export default function Button({ value, action, small=false, inverted = false }) {
 const defaultStylesFunction = defaultStyles(small, inverted);

  return (
    <TouchableOpacity onPress={action} style={defaultStylesFunction.button}>
      <Text style={defaultStylesFunction.value}>{value}</Text>
    </TouchableOpacity>
  );
}
