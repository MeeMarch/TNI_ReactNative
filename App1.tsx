import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App():React.JSX.Element {


  return (
    <View style={styles.container}>
      <AppHeader title="Apsorn Poiem"
      subtitle="Message from App.tsx"/>

      <Content msg="Message from App.tsx" name="Apsorn Poiem"/>

      
      <AppFooter ftitle="Thai-Nichi Institute of Technology"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
});
