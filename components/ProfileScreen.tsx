import { Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/styles';

const ProfileScreen = ():React.JSX.Element => {

//const profileImage = require("../assets/Profile.jpg");
const [name, setName] = useState("Apsorn Poiem");
const [image, setImage] = useState(require("../assets/Profile.jpg"));

const handleChangeName = ()=>{
    setName("New Name")
}

const handleChangeImage = ()=>{
    setImage(require("../assets/Profile2.jpg"))
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