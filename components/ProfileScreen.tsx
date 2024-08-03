import { Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import {stylesProfile} from '../styles/styles';
import Login from './Login';

const ProfileScreen = ():React.JSX.Element => {

const profileImage = require("../assets/Profile.jpg");
const newProfile = require("../assets/Profile2.jpg")

const [name, setName] = useState("Apsorn Poiem");
const [image, setImage] = useState(profileImage);

const handleChangeName = ()=>{
    setName(name == "Apsorn Poiem" ? "Meena":"Apsorn Poiem")
}

const handleChangeImage = ()=>{
    setImage(image == profileImage ? newProfile:profileImage)
}

  return (
    <View style={stylesProfile.container}>
        <View style={stylesProfile.profileContainer}>
            <Image source={image} style={stylesProfile.profileImage}/>
            <View>
                <Text style={stylesProfile.profileName}>{name}</Text>
                <Button title="CHANGE NAME" onPress={handleChangeName}/>
                <Text>{"\n"}</Text>
                <Button title="CHANGE IMAGE" onPress={handleChangeImage}/>
            </View>
        </View>
        <Login/>
    </View>
  )
}

export default ProfileScreen