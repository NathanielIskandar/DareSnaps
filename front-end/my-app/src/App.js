import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./pages/Homepage/Homepage.main";
import DareOfDay from "./pages/DareofDay/DareoOfDay.main";
import UploadDare from "./pages/UploadDare/UploadDare.main";
import DarePhotos from "./pages/DarePhotos/DarePhotos.main";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Home" component={Homepage}/>
          <Stack.Screen name="Dare" component={DareOfDay}/>
          <Stack.Screen name="Upload" component={UploadDare}/>
          <Stack.Screen name="DarePhotos" component={DarePhotos}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  
  )
    
}