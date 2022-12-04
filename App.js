import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import compo from './screens/compo';
import projects from './screens/projects';
import arduino from './co121/arduino';
import segmentled from './co121/segmentled';
import Bluetooth from './co121/Bluetooh';
import BreadBoard from './co121/BreadBoard';
import capacior from './co121/Capacitor';
import jumperwire from './co121/jumperwire';
import LCDisplay from './co121/LCDisplay';
import Resistor from './co121/Resistor';
import WaterPump from './co121/waterpump';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Compo" component={compo} />
        <Stack.Screen name="projects" component={projects} />
        <Stack.Screen name="arduino" component={arduino} />
         <Stack.Screen name="segmentle" component={segmentled} />
          <Stack.Screen name="Bluetooth" component={Bluetooth} />
           <Stack.Screen name="BreadBoard" component={BreadBoard} />
            <Stack.Screen name="capacitor" component={capacior} />
             <Stack.Screen name="jumperwire" component={jumperwire} />
              <Stack.Screen name="LCDisplay" component={LCDisplay} />
               <Stack.Screen name="Resistor" component={Resistor} />
                <Stack.Screen name="WaterPump" component={WaterPump} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
