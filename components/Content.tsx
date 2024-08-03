import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import {stylesPractice} from "../styles/styles";

type AppContentProps = {
  message: string;
  fullname: string;
};



const Content = ({ message, fullname }: AppContentProps): React.JSX.Element => {

  const[displayFullname,setDisplayFullname] = React.useState('');
  const handleButtonClick =() => {
    setDisplayFullname(fullname);
    Alert.alert("Hello", `Input your fullname: ${fullname}`);
  };

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="Click Me" onPress={handleButtonClick} color="blue" />
    </View>
  );
};

export default Content;