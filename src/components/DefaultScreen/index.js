import React from "react";
import { SafeAreaView, KeyboardAvoidingView, StatusBar, Platform } from "react-native";
import globalStyles from "../../styles";

export default function DefaultScreen({ children }) {
  return (
    <SafeAreaView style={globalStyles.fill}>
      <StatusBar />
      <KeyboardAvoidingView
        style={globalStyles.fill}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
