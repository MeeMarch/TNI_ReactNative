import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email:string):boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email);
  }

  const handleSubmit = () => {
    let errorMessage="";
    if (!name) {
/*       Alert.alert("Alert", "Please Enter Name", [{ text: "OK" }]);
      return; //break */
      errorMessage +="Please Enter Name\n";
    }
    if (!email) {
      /* Alert.alert("Alert", "Please Enter Email", [{ text: "OK" }]);
      return; */
      errorMessage +="Please Enter Email\n";
    }else if(!validateEmail(email)){
      errorMessage += "Invalid Email Format\n"
    }

    //check password
    if (!password) {
      errorMessage +="Please Enter Password\n";
    } else if(password.length<7){
      errorMessage +="Password must be at least 6 characters\n";
    }

    if(errorMessage){
      Alert.alert("Error",errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="SUBMIT" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
