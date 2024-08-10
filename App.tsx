import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import FlashListExample from './components/FlashListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'

const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlashListExample/> */}
      {/* <FlatListcallBackend/> */}
      <NewsApp/>
    </View>
  )
}

export default App
