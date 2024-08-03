import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App():React.JSX.Element {

  const title="Apsorn Poiem";
  const subtitle="Message from App.tsx";

  return (
    <View style={styles.container}>
      <AppHeader title={title}
      subtitle={subtitle}/>

      <Content msg={subtitle} name={title}/>

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
