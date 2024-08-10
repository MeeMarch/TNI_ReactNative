import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import FlashListExample from './components/FlashListExample'
import FlatListcallBackend from './components/FlatListcallBackend'

const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlashListExample/> */}
      <FlatListcallBackend/>
    </View>
  )
}

export default App
