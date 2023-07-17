import React from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from "react-native";
import globalStyles, { colors } from "../../styles";
import styles from "./styles";

export default function DefaultScreen({ children }) {
  return (
    <>
      <SafeAreaView style={styles.adjustScreen}>
        <StatusBar backgroundColor={colors.purple} />
        <KeyboardAvoidingView
          style={globalStyles.fill}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.adjustScreenFooter} />
    </>
  );
}
