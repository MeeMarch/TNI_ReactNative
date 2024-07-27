import { Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles';

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
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={image} style={styles.profileImage}/>
            <View>
                <Text style={styles.profileName}>{name}</Text>
                <Button title="CHANGE NAME" onPress={handleChangeName}/>
                <Text>{"\n"}</Text>
                <Button title="CHANGE IMAGE" onPress={handleChangeImage}/>
            </View>
        </View>
    </View>
  )
}

export default ProfileScreen