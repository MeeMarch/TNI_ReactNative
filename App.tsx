// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

import { NavigationContainer } from "@react-navigation/native";
import CreatePostScreen from "./screens/CreatePostScreen";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator //Global
      initialRouteName="Home"
      screenOptions={{
        // headerStyle: { backgroundColor: "#20b2aa" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        // headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        //options={{ title: "หน้าหลัก" }}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      {/* <HomeStack.Screen name="CreatePost" component={CreatePostScreen} /> */}
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Product" component={ProductScreen} />
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};

export default App;
