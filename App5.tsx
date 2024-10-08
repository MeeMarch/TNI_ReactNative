import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import FlashListExample from './components/FlashListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
import AxiospostData from './components/AxiospostData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'
import ModelExample from './components/ModelExample'
import WeatherApp from './components/WeatherApp'
import AboutScreen from './screens/AboutScreen'

const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlashListExample/> */}
      {/* <FlatListcallBackend/> */}
      {/* <NewsApp/> */}
      {/* <AxiospostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModelExample/> */}
      {/* <WeatherApp/> */}
      <AboutScreen/>
    </View>
  )
}

export default App
