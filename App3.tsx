import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Alert} from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice } from "./styles/styles";

export default function App():React.JSX.Element {

  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState('Message from App.tsx');
  const [footerMessage, setFooterMessage] = useState('Thai-Nichi Institute of Technology');

  useEffect(() =>{
    console.log("Component has mounted");
  },[]);

  useEffect(() =>{
    console.log(`Fullname has changed to: ${fullname}`);
  },[fullname]); //This will run whenever 'fullname' changes

  const handleButtonClick =() => {
    Alert.alert("Hello", `Input your fullname: ${fullname}`);
  };

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />
      {/* <Content message={message} fullname={fullname} /> */}
      <Content message={message} onButtonClick = {handleButtonClick} />
      <AppFooter footerMessage={footerMessage} />

      <TextInput
      style = {stylesPractice.input}
      placeholder="Enter your fullname"
      value= {fullname}
      onChangeText={setFullname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
